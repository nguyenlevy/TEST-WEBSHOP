namespace OverviewModule.Models.Dto
{
    public class OverviewDto
    {
        public decimal? SaleMoney { get; set; }
        public int? OrderAmount { get; set; }
        public int? ProductAmount { get; set; }
        public int? ReturnAmount { get; set; }
        public int? Orders { get; set; }
        public int? OrderConfirm { get; set; }
        public int? OrderDelivery { get; set; }
        public Activity Activity { get; set; }
        public Warehouse Warehouse { get; set; }
        public ProductInfo ProductInfo { get; set; }
    }
}
