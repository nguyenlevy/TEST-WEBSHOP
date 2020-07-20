namespace TurnoverModule.Models.Turnovers
{
    public class TurnoverByStore
    {
        public int Id { get; set; }
        public int? StoreId { get; set; }
        public string StoreName { get; set; }
        public decimal? SaleProceeds { get; set; }
        public int? OrderAmount { get; set; }
        public int? GoodsSoldAmount { get; set; }
        public decimal? MoneyReturned { get; set; }
        public decimal? OrderReturned { get; set; }
        public int? GoodsReturnAmount { get; set; }
    }
}
