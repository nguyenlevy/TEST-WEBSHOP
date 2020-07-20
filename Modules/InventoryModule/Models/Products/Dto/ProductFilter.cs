namespace InventoryModule.Models.Products.Dto
{
    public class ProductFilter
    {
        public int? TenantId { get; set; }
        public int? ProductId { get; set; }
        public string Name { get; set; }
    }
}
