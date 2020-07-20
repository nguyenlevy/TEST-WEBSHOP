using OverviewModule.Models.Dto;
using System.Threading.Tasks;

namespace OverviewModule.Services.Overviews
{
    public class OverviewService : IOverviewService
    {
        public async Task<OverviewDto> GetOverview(int? tenantId)
        {
            return new OverviewDto
            {
                SaleMoney = 300000,
                OrderAmount = 3,
                ProductAmount = 2,
                ReturnAmount = 0,
                Orders = 0,
                OrderConfirm = 0,
                OrderDelivery = 0,
                Activity = new Activity
                {
                    SaleMoney = 1600000,
                    Interest = 500000,
                    OrderAmount = 3,
                    ReturnAmount = 0
                },
                Warehouse = new Warehouse
                {
                    LongInventory = 50,
                    OutOfStock = 25,
                    AlmostOutOfStock = 0,
                    BeyondTheNorm = 0
                },
                ProductInfo = new ProductInfo
                {
                    ProductAmount = "73/74",
                    NoPrice = 5,
                    NoCost = 3,
                    UnclassifiedGood = 3
                }
            };
        }
    }
}
