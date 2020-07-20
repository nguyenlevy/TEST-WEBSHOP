using System;
using System.Threading.Tasks;

namespace OverviewModule.Core
{
    public class UnitOfWorkOverview : IUnitOfWorkOverview, IDisposable
    {
        protected OverviewDbContext context = new OverviewDbContext();
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
