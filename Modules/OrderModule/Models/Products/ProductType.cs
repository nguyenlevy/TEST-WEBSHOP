using System.ComponentModel.DataAnnotations.Schema;

namespace OrderModule.Models.Products
{

    [Table("ProductType")]
    public class ProductType
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int? TenantId { get; set; }
    }
}
