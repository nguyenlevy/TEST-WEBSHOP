using System;

namespace TurnoverModule.Models.Turnovers
{
    public class TurnoverByTime
    {
        public int Id { get; set; }
        public string OrderCode { get; set; }
        public DateTime? SaleDate { get; set; }
        public int? SellerId { get; set; }
        public string SellerName { get; set; }
        public int? CustomerId { get; set; }
        public string CustomerName { get; set; }
        public int? Quantity { get; set; }
        public decimal? TotalAmount { get; set; }
        public decimal Total { get; set; }
    }
}
