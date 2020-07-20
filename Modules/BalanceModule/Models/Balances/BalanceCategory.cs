using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace BalanceModule.Models.Balances
{
    [Table("BalanceCategory")]
    public class BalanceCategory
    {
        public int Id { get; set; }
        public int TenantId { get; set; }
        [Column(TypeName = "nvarchar(150)")]
        public string Name { get; set; }
        public BalanceType BalanceType { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public long? UserModifiedId { get; set; }
    }
}
