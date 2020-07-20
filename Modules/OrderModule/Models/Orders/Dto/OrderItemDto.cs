using OrderModule.Models.Products;
using System;
using System.Collections.Generic;

namespace OrderModule.Models.Orders.Dto
{
    public class OrderItemDto
    {
        public int CustomerId { get; set; }
        public DateTime? SaleDateUtc { get; set; }
        public int? SellerId { get; set; }
        public string OrderNote { get; set; }
        public int? CarrierId { get; set; }
        public DateTime? DeliveryDate { get; set; }
        public string Shipper { get; set; }
        public string ShipmentNote { get; set; }
        public List<ProductDto> Products { get; set; }
        public int? PaymentMethodId { get; set; }
        public decimal OrderDiscount { get; set; }
        public decimal OrderTotal { get; set; }
        public decimal OrderDebt { get; set; }
        public decimal OrderPaid { get; set; }
        public OrderType OrderType { get; set; }
        public int? StoreId { get; set; }
    }
}
