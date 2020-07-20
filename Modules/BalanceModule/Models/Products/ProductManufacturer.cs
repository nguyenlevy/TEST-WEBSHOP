using System.ComponentModel.DataAnnotations.Schema;

namespace BalanceModule.Models.Products
{
    [Table("ProductManufacturer")]
    public class ProductManufacturer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int? TenantId { get; set; }
    }
}
