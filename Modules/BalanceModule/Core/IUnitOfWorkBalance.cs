using BalanceModule.Models.Balances;
using BalanceModule.Models.Costs;
using BalanceModule.Models.CostTypes;
using BalanceModule.Models.OrderItems;
using BalanceModule.Models.OrderNotes;
using BalanceModule.Models.Orders;
using System.Threading.Tasks;

namespace BalanceModule.Core
{
    public interface IUnitOfWorkBalance
    {
        Task Commit();

        GenericRepository<Order> OrderRepository { get; }
        GenericRepository<OrderItem> OrderItemRepository { get; }
        GenericRepository<OrderNote> OrderNoteRepository { get; }
        GenericRepository<Balance> BalanceRepository { get; }
        GenericRepository<Cost> CostRepository { get; }
        GenericRepository<CostType> CostTypeRepository { get; }
        GenericRepository<BalanceCategory> BalanceCategoryRepository { get; }
    }
}
