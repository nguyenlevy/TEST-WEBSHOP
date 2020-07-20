using BalanceModule.Models.Employees;
using BalanceModule.Models.PaymentMethods;
using BalanceModule.Models.Stores;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace BalanceModule.Models.Balances
{
    [Table("Balance")]
    public class Balance
    {
        public int Id { get; set; }
        public int TenantId { get; set; }
        public BalanceType BalanceType { get; set; }
        public int? PaymentMethodId { get; set; }
        public PaymentMethod PaymentMethod { get; set; }
        public int? StoreId { get; set; }
        public Store Store { get; set; }
        public DateTime? BalanceDate { get; set; }
        [Column(TypeName = "decimal(18, 4)")]
        public decimal? Price { get; set; }
        [Column(TypeName = "nvarchar(150)")]
        public string Note { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Code { get; set; }
        public int? SellerId { get; set; }
        public Employee Employee { get; set; }
        public int? BalanceCategoryId { get; set; }
        public BalanceCategory BalanceCategory { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public long? UserModifiedId { get; set; }
    }
}
