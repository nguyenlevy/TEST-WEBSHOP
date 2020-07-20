using System;
using System.Collections.Generic;
using System.Text;

namespace WebClientService.Models
{
     public class Customer
    {
        public int Id { get; set; }

        public string CustomerCode { get; set; }

        public string Email { get; set; }

        public int TenantId { get; set; }

        public int? Gender { get; set; }

        public DateTime? Birthday { get; set; }

        
        public string PhoneNumber { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        public DateTime? LastOrder { get; set; }
        public decimal? TotalSales { get; set; }

        public decimal? PaidAmount { get; set; }

        public decimal? DebtAmount { get; set; }

        public string TaxCode { get; set; }

        public string Note { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public long? UserModifiedId { get; set; }
    }
}
