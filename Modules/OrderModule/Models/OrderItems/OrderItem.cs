using OrderModule.Models.Orders;
using OrderModule.Models.Products;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace OrderModule.Models.OrderItems
{
    [Table("OrderItem")]
    public class OrderItem
    {
        public int Id { get; set; }
        public int OrderId { get; set; }
        public Order Order { get; set; }
        public int ProductId { get; set; }
        public Product Product { get; set; }
        public int Amount { get; set; }
        [Column(TypeName = "decimal(18, 4)")]
        public decimal Price { get; set; }
        [Column(TypeName = "decimal(18, 4)")]
        public decimal DiscountAmount { get; set; }
        public int TenantId { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public long? UserModifiedId { get; set; }
    }
}
