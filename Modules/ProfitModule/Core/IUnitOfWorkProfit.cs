using System.Threading.Tasks;
using ProfitModule.Models.OrderItems;
using ProfitModule.Models.Orders;

namespace ProfitModule.Core
{
    public interface IUnitOfWorkProfit
    {
        Task Commit();

        GenericRepository<Order> OrderRepository { get; }
        GenericRepository<OrderItem> OrderItemRepository { get; }
    }
}
