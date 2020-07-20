using System;
using System.Threading.Tasks;
using ProfitModule.Models.OrderItems;
using ProfitModule.Models.Orders;

namespace ProfitModule.Core
{
    public class UnitOfWorkProfit : IUnitOfWorkProfit, IDisposable
    {
        protected ProfitDbContext context = new ProfitDbContext();

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
