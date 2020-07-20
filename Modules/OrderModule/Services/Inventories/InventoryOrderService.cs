using AutoMapper;
using Microsoft.EntityFrameworkCore;
using OrderModule.Core;
using OrderModule.Models.Inventories;
using OrderModule.Models.UserModified;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrderModule.Services.Inventories
{
    public class InventoryOrderService : IInventoryOrderService
    {

        private readonly IMapper _mapper;
        private readonly IUnitOfWorkOrder _unitOfWork;
        public InventoryOrderService(
            IMapper mapper,
            IUnitOfWorkOrder unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }
        public async Task UpdateAllInventories(int orderId, UserModified userModified)
        {
            var orderItems = await _unitOfWork.OrderItemRepository
                                              .FindByCondition(oi => oi.OrderId == orderId)
                                              .AsNoTracking()
                                              .ToListAsync();
            var inventories = await _unitOfWork.InventoryRepository
                                            .FindAll()
                                            .AsNoTracking()
                                            .OrderByDescending(t => t.CreatedDate)
                                            .ToListAsync();

            var iventoryModels = new List<Inventory>();
            var listProductIdsUpdated = inventories.Select(i => i.ProductId).ToList();
            if (inventories.Any())
            {
                inventories = inventories.GroupBy(i => i.ProductId)
                                            .Select(grp => grp.FirstOrDefault())
                                            .ToList();
                foreach (var inventory in inventories)
                {
                    var orderItemsFound = orderItems.Where(o => o.ProductId == inventory.ProductId).ToList();
                    iventoryModels.Add(CreateInventoryModel(inventory.ProductId,
                                                inventory.AmountOfImport,
                                                orderItemsFound.Sum(o => o.Amount),
                                                userModified));
                }
            }
            if (orderItems.Any())
            {
                var orderItemsGroupByProductId = orderItems.Where(o => !listProductIdsUpdated.Contains(o.ProductId))
                                                             .GroupBy(i => i.ProductId)
                                                             .Select(grp => grp.FirstOrDefault())
                                                             .ToList();
                foreach (var inventory in orderItemsGroupByProductId)
                {
                    var orderItemsFound = orderItems.Where(o => o.ProductId == inventory.ProductId).ToList();
                    iventoryModels.Add(CreateInventoryModel(inventory.ProductId,
                                                    0,
                                                    orderItemsFound.Sum(o => o.Amount),
                                                    userModified));
                }
            }

            _unitOfWork.InventoryRepository.AddRange(iventoryModels);
            await _unitOfWork.Commit();
        }

        private Inventory CreateInventoryModel(
                                    int productId,
                                    int currentAmountOfImport,
                                    int currentAmountOfExport,
                                    UserModified userModified)
        {
            var inventoryModel = new Inventory
            {
                ProductId = productId,
                Amount = currentAmountOfImport - currentAmountOfExport,
                AmountOfImport = currentAmountOfImport,
                AmountOfExport = currentAmountOfExport,
                TenantId = userModified.TenantId.Value,
                CreatedDate = DateTime.Now,
                UserModifiedId = userModified.UserId,
            };
            return inventoryModel;
        }
    }
}
