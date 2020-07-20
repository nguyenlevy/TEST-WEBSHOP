using InventoryModule.Models.Inventories.Dto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace InventoryModule.Services.Inventories
{
    public interface IInventoryService
    {
        Task<List<InventoryDto>> GetByFilter(InventoryFilter inventoryFilter);
    }
}
