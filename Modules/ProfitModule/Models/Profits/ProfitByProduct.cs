namespace ProfitModule.Models.Profits
{
    public class ProfitByProduct
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string ProductCode { get; set; }
        public int? SoldAmount { get; set; }
        public int? ReturnedAmount { get; set; }
        public decimal? MoneyReturned { get; set; }
        public decimal? Discount { get; set; }
        public decimal? Revenue { get; set; }
        public decimal Capital { get; set; }
        public decimal Interest { get; set; }
    }
}
