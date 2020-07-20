using TurnoverModule.Models.Orders;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace TurnoverModule.Models.OrderNotes
{
    [Table("OrderNote")]
    public class OrderNote
    {
        public int Id { get; set; }
        public int OrderId { get; set; }
        public Order Order { get; set; }
        public string Note { get; set; }
        public bool DisplayToCustomer { get; set; }
        public int TenantId { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public long? UserModifiedId { get; set; }
    }
}
