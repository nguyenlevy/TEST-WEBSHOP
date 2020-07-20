using System;

namespace BalanceModule.Models.Balances.Dto
{
    public class BalanceDto
    {
        public int? Id { get; set; }
        public BalanceType? BalanceType { get; set; }
        public int? PaymentMethodId { get; set; }
        public string PaymentMethodName { get; set; }
        public int? StoreId { get; set; }
        public string StoreName { get; set; }
        public int? SellerId { get; set; }
        public string SellerName { get; set; }
        public int? BalanceCategoryId { get; set; }
        public string BalanceCategoryName { get; set; }
        public string BalanceDate { get; set; }
        public decimal? Price { get; set; }
        public string Note { get; set; }
        public string Code { get; set; }
    }
}
