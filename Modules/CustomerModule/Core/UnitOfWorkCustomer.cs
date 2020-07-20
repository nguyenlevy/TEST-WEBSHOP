using CustomerModule.Models.Customers;
using System;
using System.Threading.Tasks;

namespace CustomerModule.Core
{
    public class UnitOfWorkCustomer : IUnitOfWorkCustomer, IDisposable
    {
        protected CustomerDbContext context = new CustomerDbContext();

        public GenericRepository<Customer> CustomerRepository => new GenericRepository<Customer>(context);

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
