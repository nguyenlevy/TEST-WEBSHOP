using System;
using System.Threading.Tasks;
using WebClient.Models;

namespace WebClient.Core
{
    public class UnitOfWorkWebClient : IUnitOfWorkWebClient, IDisposable
    {
        protected WebClientDbContext context = new WebClientDbContext();

        public GenericRepository<Product> ProductRepository => new GenericRepository<Product>(context);
        public GenericRepository<ProductCategory> ProductCategoryRepository => new GenericRepository<ProductCategory>(context);
        public GenericRepository<Category> CategoryRepository => new GenericRepository<Category>(context);

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
