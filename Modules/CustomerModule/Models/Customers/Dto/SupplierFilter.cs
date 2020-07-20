namespace CustomerModule.Models.Customers.Dto
{
    public class SupplierFilter
    {
        public int? TenantId { get; set; }
        public int? CustomerId { get; set; }
        public string CustomerCode { get; set; }
    }
}
