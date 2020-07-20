using System.Collections.Generic;

namespace WebClient.Models.Dto
{
    public class ProductDto
    {
        public int Id { get; set; }
        public int? ProductTypeId { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public decimal Cost { get; set; }
        public bool? PublishedPOS { get; set; }
        public int? TaxCategoryId { get; set; }
        public int? MinStockQuantity { get; set; }
        public bool? FollowInventory { get; set; }
        public int? ProductManufacturerId { get; set; }
        public int? MaxStockQuantity { get; set; }
        public bool? AllowNegativeInventory { get; set; }
        public bool? ManageBySerial { get; set; }
        public string ProductCode { get; set; }
        public int Amount { get; set; }
        public string ProductCategoryName { get; set; }
        public int? ProductCategoryId { get; set; }
        public string ProductManufacturerName { get; set; }
        public string ProductStatusName { get; set; }
        public int? ProductStatusId { get; set; }
    }
}
