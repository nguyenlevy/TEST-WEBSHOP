using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WarehousingModule.Core;
using WarehousingModule.Models.Inventories;
using WarehousingModule.Models.Orders;
using WarehousingModule.Models.UserModified;

namespace WarehousingModule.Services.Inventories
{
    public class InventoryWarehousingService : IInventoryWarehousingService
    {

        private readonly IMapper _mapper;
        private readonly IUnitOfWorkWarehousing _unitOfWork;
        public InventoryWarehousingService(
            IMapper mapper,
            IUnitOfWorkWarehousing unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }
        public async Task UpdateAllInventories(int orderId, DateTime? warehousingDate, UserModified userModified)
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
            var listProductIdsUpdated = inventories.GroupBy(i => i.ProductId).Select(i => i.FirstOrDefault().ProductId).ToList();
            if (inventories.Any())
            {
                inventories = inventories.GroupBy(i => i.ProductId)
                                            .Select(grp => grp.FirstOrDefault())
                                            .ToList();
                foreach (var inventory in inventories)
                {
                    var orderItemsFound = orderItems.Where(o => o.ProductId == inventory.ProductId).ToList();
                    iventoryModels.Add(CreateInventoryModel(inventory.ProductId,
                                                orderItemsFound.Sum(o => o.Amount),
                                                inventory.AmountOfExport,
                                                userModified,
                                                orderItemsFound.Any() ? warehousingDate : DateTime.Now));
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
                                                    orderItemsFound.Sum(o => o.Amount),
                                                    0,
                                                    userModified,
                                                    warehousingDate));
                }
            }

            _unitOfWork.InventoryRepository.AddRange(iventoryModels);
            await _unitOfWork.Commit();
        }
      
        private Inventory CreateInventoryModel(
                                    int productId,
                                    int currentAmountOfImport,
                                    int currentAmountOfExport,
                                    UserModified userModified,
                                    DateTime? warehousingDate)
        {
            var inventoryModel = new Inventory
            {
                ProductId = productId,
                Amount = currentAmountOfImport - currentAmountOfExport,
                AmountOfImport = currentAmountOfImport,
                AmountOfExport = currentAmountOfExport,
                TenantId = userModified.TenantId.Value,
                CreatedDate = warehousingDate,
                UserModifiedId = userModified.UserId,
            };
            return inventoryModel;
        }
    }
}
