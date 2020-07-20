namespace ProfitModule.Models.Profits
{
    public class ProfitByStore
    {
        public int Id { get; set; }
        public int? StoreId { get; set; }
        public string StoreName { get; set; }
        public int? SoldAmount { get; set; }
        public int? ReturnedAmount { get; set; }
        public decimal? MoneyReturned { get; set; }
        public decimal? Discount { get; set; }
        public decimal? Revenue { get; set; }
        public decimal Capital { get; set; }
        public decimal Interest { get; set; }
    }
}
