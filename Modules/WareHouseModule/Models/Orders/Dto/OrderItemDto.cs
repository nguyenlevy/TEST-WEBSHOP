using WarehousingModule.Models.Products;
using System;
using System.Collections.Generic;

namespace WarehousingModule.Models.Orders.Dto
{
    public class OrderItemDto
    {
        public int CustomerId { get; set; }
        public DateTime? SaleDateUtc { get; set; }
        public string OrderNote { get; set; }
        public List<ProductDto> Products { get; set; }
        public int? PaymentMethodId { get; set; }
        public decimal OrderDiscount { get; set; }
        public decimal OrderTotal { get; set; }
        public decimal OrderDebt { get; set; }
        public decimal OrderPaid { get; set; }
        public decimal OrderTax { get; set; }
        public OrderType OrderType { get; set; }
        public int? StoreId { get; set; }
    }
}
