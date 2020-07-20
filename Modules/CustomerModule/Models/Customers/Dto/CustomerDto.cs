using System;

namespace CustomerModule.Models.Customers.Dto
{
    public class CustomerDto
    {
        public int Id { get; set; }

        public string CustomerCode { get; set; }

        public string Email { get; set; }

        public int? Gender { get; set; }

        public DateTime? Birthday { get; set; }

        public CustomerType? CustomerTypeId { get; set; }

        public string PhoneNumber { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        public DateTime? LastOrder { get; set; }

        public decimal? TotalSales { get; set; }

        public decimal? PaidAmount { get; set; }

        public decimal? DebtAmount { get; set; }
    }
}
