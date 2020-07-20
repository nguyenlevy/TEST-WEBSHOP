using System;
using System.Threading.Tasks;
using TurnoverModule.Models.OrderItems;
using TurnoverModule.Models.Orders;

namespace TurnoverModule.Core
{
    public class UnitOfWorkTurnover : IUnitOfWorkTurnover, IDisposable
    {
        protected TurnoverDbContext context = new TurnoverDbContext();

        public GenericRepository<Order> OrderRepository => new GenericRepository<Order>(context);

        public GenericRepository<OrderItem> OrderItemRepository => new GenericRepository<OrderItem>(context);

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
