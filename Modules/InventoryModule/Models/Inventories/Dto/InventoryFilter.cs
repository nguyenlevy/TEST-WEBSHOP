using System;

namespace InventoryModule.Models.Inventories.Dto
{
    public class InventoryFilter
    {
        public int? TenantId { get; set; }
        public DateTime? FromDate { get; set; }
        public DateTime? ToDate { get; set; }
        public InventoryType InventoryType { get; set; }
    }
}
