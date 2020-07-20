using WarehousingModule.Models.Customers;
using WarehousingModule.Models.Employees;
using WarehousingModule.Models.OrderItems;
using WarehousingModule.Models.OrderNotes;
using WarehousingModule.Models.PaymentMethods;
using WarehousingModule.Models.Shipments;
using WarehousingModule.Models.Stores;
using System;
using System.Collections.Generic;

namespace WarehousingModule.Models.Orders.Dto
{
    public class OrderDto
    {
        public int Id { get; set; }
        public int? StoreId { get; set; }
        public Store Store { get; set; }
        public int CustomerId { get; set; }
        public Customer Customer { get; set; }
        public OrderStatus OrderStatusId { get; set; }
        public decimal OrderTax { get; set; }
        public decimal OrderDiscount { get; set; }
        public decimal OrderTotal { get; set; }
        public decimal? OrderDebt { get; set; }
        public decimal? OrderPaid { get; set; }
        public string OrderCode { get; set; }
        public int? PaymentMethodId { get; set; }
        public PaymentMethod PaymentMethod { get; set; }
        public DateTime? SaleDate { get; set; }
        public int? SellerId { get; set; }
        public Employee Seller { get; set; }
        public OrderType? OrderType { get; set; }
        public Shipment Shipment { get; set; }
        public ICollection<OrderItem> OrderItems { get; set; }
        public OrderNote OrderNote { get; set; }
        public int? Amount { get; set; }
    }
}
