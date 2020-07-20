using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace OrderModule.Models.Products
{
    [Table("Product")]
    public class Product
    {
        public int Id { get; set; }
        public int? ProductTypeId { get; set; }
        public ProductType ProductType { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public decimal Cost { get; set; }
        public int TenantId { get; set; }
        public bool? PublishedPOS { get; set; }
        public int? TaxCategoryId { get; set; }
        public TaxCategory TaxCategory { get; set; }
        public int? MinStockQuantity { get; set; }
        public bool? FollowInventory { get; set; }
        public int? ProductManufacturerId { get; set; }
        public ProductManufacturer ProductManufacturer { get; set; }
        public int? MaxStockQuantity { get; set; }
        public bool? AllowNegativeInventory { get; set; }
        public bool? ManageBySerial { get; set; }
        public string ProductCode { get; set; }
        public ICollection<ProductCategory> ProductCategories { get; set; }
        public int? ProductStatusId { get; set; }
        public ProductStatus ProductStatus { get; set; }
    }
}
