namespace TurnoverModule.Models.Turnovers
{
    public class TurnoverByProduct
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string ProductCode { get; set; }
        public int? SoldAmount { get; set; }
        public decimal? SaleProceeds { get; set; }
        public int? ReturnedAmount { get; set; }
        public decimal? MoneyReturned { get; set; }
    }
}
