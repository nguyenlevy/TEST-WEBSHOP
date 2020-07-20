using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace InventoryModule.Models.Products
{
    [Table("ProductStatus")]
    public class ProductStatus
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int? TenantId { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public long? UserModifiedId { get; set; }
    }
}
