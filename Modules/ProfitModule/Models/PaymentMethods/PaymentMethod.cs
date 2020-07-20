using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProfitModule.Models.PaymentMethods
{
    [Table("PaymentMethod")]
    public class PaymentMethod
    {
        public int Id { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Name { get; set; }
        public int TenantId { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public long? UserModifiedId { get; set; }
    }
}
