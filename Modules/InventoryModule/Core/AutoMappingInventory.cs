using AutoMapper;
using InventoryModule.Models.Inventories;
using InventoryModule.Models.Inventories.Dto;

namespace WarehousingModule.Core
{
    public class AutoMappingInventory : Profile
    {
        public AutoMappingInventory()
        {
            CreateMap<Inventory, InventoryDto>();
        }
    }
}
