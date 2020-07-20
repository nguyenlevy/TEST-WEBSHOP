using InventoryModule.Models.Inventories;
using InventoryModule.Models.Products;
using System;
using System.Threading.Tasks;

namespace WarehousingModule.Core
{
    public class UnitOfWorkInventory : IUnitOfWorkInventory, IDisposable
    {
        protected InventoryDbContext context = new InventoryDbContext();
        public async Task Commit()
        {
            await context.SaveChangesAsync();
        }

        private bool disposed = false;

        public GenericRepository<Inventory> InventortRepository => new GenericRepository<Inventory>(context);

        public GenericRepository<Product> ProductRepository => new GenericRepository<Product>(context);

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
