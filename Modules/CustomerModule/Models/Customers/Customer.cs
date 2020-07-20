using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace CustomerModule.Models.Customers
{
    [Table("Customer")]
    public class Customer
    {
        public int Id { get; set; }

        [Column(TypeName = "varchar(50)")]
        public string CustomerCode { get; set; }

        [Column(TypeName = "varchar(1000)")]
        public string Email { get; set; }

        public int TenantId { get; set; }

        [Column(TypeName = "char(1)")]
        public int? Gender { get; set; }

        public DateTime? Birthday { get; set; }

        [Column(TypeName = "tinyint")]
        public CustomerType? CustomerTypeId { get; set; }

        [Column(TypeName = "varchar(20)")]
        public string PhoneNumber { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Name { get; set; }

        [Column(TypeName = "nvarchar(200)")]
        public string Address { get; set; }

        public DateTime? LastOrder { get; set; }

        [Column(TypeName = "decimal(18, 0)")]
        public decimal? TotalSales { get; set; }

        [Column(TypeName = "decimal(18, 0)")]
        public decimal? PaidAmount { get; set; }

        [Column(TypeName = "decimal(18, 0)")]
        public decimal? DebtAmount { get; set; }

        [Column(TypeName = "varchar(50)")]
        public string TaxCode { get; set; }

        [Column(TypeName = "nvarchar(200)")]
        public string Note { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public long? UserModifiedId { get; set; }
    }
}
