using System;

namespace CustomerModule.Models.Customers.Dto
{
    public class SupplierDto
    {
        public int Id { get; set; }

        public string CustomerCode { get; set; }

        public string Email { get; set; }

        public CustomerType? CustomerTypeId { get; set; }

        public string PhoneNumber { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        public DateTime? LastOrder { get; set; }

        public decimal? TotalSales { get; set; }

        public decimal? PaidAmount { get; set; }

        public decimal? DebtAmount { get; set; }
        public string TaxCode { get; set; }
        public string Note { get; set; }
    }
}
