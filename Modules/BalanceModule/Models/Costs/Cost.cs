using BalanceModule.Models.CostTypes;
using BalanceModule.Models.Employees;
using BalanceModule.Models.PaymentMethods;
using BalanceModule.Models.Stores;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace BalanceModule.Models.Costs
{
    [Table("Cost")]
    public class Cost
    {
        public int Id { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Name { get; set; }
        public int TenantId { get; set; }
        public int? PaymentMethodId { get; set; }
        public PaymentMethod PaymentMethod { get; set; }
        public DateTime? CostDate { get; set; }
        [Column(TypeName = "decimal(18, 4)")]
        public decimal? Price { get; set; }
        [Column(TypeName = "nvarchar(150)")]
        public string Note { get; set; }
        public int? CostTypeId { get; set; }
        public CostType CostType { get; set; }
        public int? StoreId { get; set; }
        public Store Store { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Code { get; set; }
        public int? SellerId { get; set; }
        public Employee Employee { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public long? UserModifiedId { get; set; }
    }
}
