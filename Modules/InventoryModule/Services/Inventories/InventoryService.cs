using AutoMapper;
using InventoryModule.Models.Inventories;
using InventoryModule.Models.Inventories.Dto;
using InventoryModule.Models.Products;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WarehousingModule.Core;

namespace InventoryModule.Services.Inventories
{
    public class InventoryService : IInventoryService
    {

        private readonly IMapper _mapper;
        private readonly IUnitOfWorkInventory _unitOfWork;
        public InventoryService(
            IMapper mapper,
            IUnitOfWorkInventory unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        public async Task<List<InventoryDto>> GetByFilter(InventoryFilter inventoryFilter)
        {
            var queryAllInventories = _unitOfWork.InventortRepository
                                                .FindByCondition(i => i.TenantId == inventoryFilter.TenantId.Value);

            IQueryable<Inventory> queryInventory = queryAllInventories;
            if (inventoryFilter.InventoryType == InventoryType.StockMovement)
            {
                inventoryFilter.FromDate = inventoryFilter.FromDate ?? DateTime.Today;
                inventoryFilter.ToDate = inventoryFilter.ToDate ?? DateTime.Today;
                queryInventory = queryInventory.Where(i => i.CreatedDate >= inventoryFilter.FromDate
                                                            && i.CreatedDate <= inventoryFilter.ToDate);
            }
            var inventories = await queryInventory.AsNoTracking()                                                
                                                .OrderByDescending(t => t.CreatedDate)
                                                .ToListAsync();
            inventories = inventories.GroupBy(i => i.ProductId)
                                            .Select(grp => grp.FirstOrDefault())
                                            .ToList();
            var productIdList = inventories.Select(i => i.ProductId).ToList();
            var products = await _unitOfWork.ProductRepository
                                                .FindByCondition(p => productIdList.Contains(p.Id))
                                                .Include(p => p.ProductType)
                                                .Include(p => p.ProductManufacturer)
                                                .Include(p => p.TaxCategory)
                                                .Include(p => p.ProductCategories)
                                                    .ThenInclude(pc => pc.Category)
                                                .Include(p => p.ProductStatus)
                                                .AsNoTracking()
                                                .ToListAsync();
            switch(inventoryFilter.InventoryType)
            {
                case InventoryType.Inventory:
                    return GenerateListForInventory(inventories, products);
                case InventoryType.StockMovement:
                    var allInventories = await queryAllInventories.AsNoTracking().ToListAsync();
                    return GenerateListForStockMovement(inventories,
                                            products,
                                            allInventories,
                                            inventoryFilter.FromDate.Value,
                                            inventoryFilter.ToDate.Value);
                default:
                    return new List<InventoryDto>();
            }
        }

        private List<InventoryDto> GenerateListForInventory(List<Inventory> inventories, List<Product> products)
        {
            var inventoriesDto = _mapper.Map<List<InventoryDto>>(inventories);
            foreach (var inventory in inventoriesDto)
            {
                var productData = products.FirstOrDefault(p => inventory.ProductId == p.Id);
                if (productData == null)
                {
                    continue;
                }
                inventory.ProductCode = productData.ProductCode;
                inventory.ProductName = productData.Name;
                inventory.InventoryCapital = inventory.Amount * productData.Cost;
                inventory.InventoryValue = inventory.Amount * productData.Price;
                inventory.ProductStatusName = productData.ProductStatus?.Name;
                inventory.ProductManufacturerName = productData.ProductManufacturer?.Name;
                inventory.ProductTypeName = productData.ProductType?.Name;
                inventory.ProductCategoryName = productData.ProductCategories.FirstOrDefault()?.Category.Name;
            }

            return inventoriesDto;
        }

        private List<InventoryDto> GenerateListForStockMovement(List<Inventory> inventories,
                                                                    List<Product> products,
                                                                    List<Inventory> allInventories,
                                                                    DateTime fromDate,
                                                                    DateTime toDate)
        {
            var inventoriesDto = _mapper.Map<List<InventoryDto>>(inventories);
            var allInventoriesDto = _mapper.Map<List<InventoryDto>>(allInventories);
            foreach (var inventory in inventoriesDto)
            {
                var earlyInventory = allInventoriesDto.Where(i => i.CreatedDate <= fromDate && i.ProductId == inventory.ProductId)
                                                    .OrderByDescending(i => i.CreatedDate)
                                                    .FirstOrDefault();
                var endInventory = allInventoriesDto.Where(i => i.CreatedDate >= toDate && i.ProductId == inventory.ProductId)
                                                    .OrderBy(i => i.CreatedDate)
                                                    .FirstOrDefault();
                endInventory = endInventory ?? inventoriesDto.Where(i => i.ProductId == inventory.ProductId
                                                                        && i.CreatedDate <= toDate)
                                                                        .OrderByDescending(i => i.CreatedDate)
                                                                        .FirstOrDefault();
                var productData = products.FirstOrDefault(p => inventory.ProductId == p.Id);
                if (productData == null)
                {
                    continue;
                }
                inventory.ProductCode = productData.ProductCode;
                inventory.ProductName = productData.Name;
                inventory.EarlyInventory = earlyInventory?.Amount ?? 0;
                inventory.EndInventory = endInventory?.Amount ?? 0;
                inventory.AmountOfImport = (endInventory?.AmountOfImport ?? 0) - (earlyInventory?.AmountOfImport ?? 0);
                inventory.AmountOfExport = (endInventory?.AmountOfExport ?? 0) - (earlyInventory?.AmountOfExport ?? 0);
                inventory.ProductStatusName = productData.ProductStatus?.Name;
                inventory.ProductManufacturerName = productData.ProductManufacturer?.Name;
                inventory.ProductTypeName = productData.ProductType?.Name;
                inventory.ProductCategoryName = productData.ProductCategories.FirstOrDefault()?.Category.Name;
            }

            return inventoriesDto;
        }
    }
}
