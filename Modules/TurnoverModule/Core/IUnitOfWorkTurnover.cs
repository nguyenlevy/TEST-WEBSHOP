using System.Threading.Tasks;
using TurnoverModule.Models.OrderItems;
using TurnoverModule.Models.Orders;

namespace TurnoverModule.Core
{
    public interface IUnitOfWorkTurnover
    {
        Task Commit();

        GenericRepository<Order> OrderRepository { get; }
        GenericRepository<OrderItem> OrderItemRepository { get; }
    }
}
