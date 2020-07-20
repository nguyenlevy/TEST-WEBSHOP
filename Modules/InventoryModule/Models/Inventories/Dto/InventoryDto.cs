using System;

namespace InventoryModule.Models.Inventories.Dto
{
    public class InventoryDto
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public int Amount { get; set; }
        public int EarlyInventory { get; set; }
        public int AmountOfImport { get; set; }
        public int AmountOfExport { get; set; }
        public int EndInventory { get; set; }
        public string ProductCode { get; set; }
        public string ProductName { get; set; }
        public decimal InventoryCapital { get; set; }
        public decimal InventoryValue { get; set; }
        public string ProductCategoryName { get; set; }
        public string ProductStatusName { get; set; }
        public string ProductManufacturerName { get; set; }
        public string ProductTypeName { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
