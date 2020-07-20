namespace TurnoverModule.Models.Turnovers
{
    public class TurnoverBySeller
    {
        public int Id { get; set; }
        public int? SellerId { get; set; }
        public string SellerName { get; set; }
        public decimal? SaleProceeds { get; set; }
        public int? OrderAmount { get; set; }
        public int? GoodsSoldAmount { get; set; }
        public decimal? MoneyReturned { get; set; }
        public int? OrderReturned { get; set; }
        public int? GoodsReturnAmount { get; set; }
    }
}
