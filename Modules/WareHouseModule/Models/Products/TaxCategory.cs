using System.ComponentModel.DataAnnotations.Schema;

namespace WarehousingModule.Models.Products
{
    [Table("TaxCategory")]
    public class TaxCategory
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int? TenantId { get; set; }
    }
}
