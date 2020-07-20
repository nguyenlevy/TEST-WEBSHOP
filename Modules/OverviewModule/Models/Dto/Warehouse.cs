namespace OverviewModule.Models.Dto
{
    public class Warehouse
    {
        public int? LongInventory { get; set; }
        public int? OutOfStock { get; set; }
        public int? AlmostOutOfStock { get; set; }
        public int? BeyondTheNorm { get; set; }
    }
}
