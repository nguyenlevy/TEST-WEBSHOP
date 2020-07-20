using System;
using System.Threading.Tasks;
using BalanceModule.Models.Balances;
using BalanceModule.Models.Costs;
using BalanceModule.Models.CostTypes;
using BalanceModule.Models.OrderItems;
using BalanceModule.Models.OrderNotes;
using BalanceModule.Models.Orders;

namespace BalanceModule.Core
{
    public class UnitOfWorkBalance : IUnitOfWorkBalance, IDisposable
    {
        protected BalanceDbContext context = new BalanceDbContext();

        public GenericRepository<Order> OrderRepository => new GenericRepository<Order>(context);

        public GenericRepository<OrderItem> OrderItemRepository => new GenericRepository<OrderItem>(context);

        public GenericRepository<Balance> BalanceRepository => new GenericRepository<Balance>(context);

        public GenericRepository<Cost> CostRepository => new GenericRepository<Cost>(context);

        public GenericRepository<CostType> CostTypeRepository => new GenericRepository<CostType>(context);

        public GenericRepository<OrderNote> OrderNoteRepository => new GenericRepository<OrderNote>(context);

        public GenericRepository<BalanceCategory> BalanceCategoryRepository => new GenericRepository<BalanceCategory>(context);

        public async Task Commit()
        {
            await context.SaveChangesAsync();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
