using System;

namespace BalanceModule.Models.Costs.Dto
{
    public class CostDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int? PaymentMethodId { get; set; }
        public string CostDate { get; set; }
        public decimal? Price { get; set; }
        public string Note { get; set; }
        public int? CostTypeId { get; set; }
        public int? StoreId { get; set; }
        public string Code { get; set; }
        public int? SellerId { get; set; }
    }
}
