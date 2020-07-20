using Common.Core;
using Common.Models.Categories;
using Common.Modes.Menu;
using System;
using System.Threading.Tasks;

namespace Authentication.Core
{
    public class UnitOfWorkCommon : IUnitOfWorkCommon, IDisposable
    {
        protected CommonDbContext context = new CommonDbContext();
        public GenericRepository<Menu> MenuRepository => new GenericRepository<Menu>(context);
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
