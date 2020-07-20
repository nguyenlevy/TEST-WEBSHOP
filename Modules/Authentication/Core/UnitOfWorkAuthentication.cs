using Authentication.Models.Users;
using System;
using System.Threading.Tasks;

namespace Authentication.Core
{
    public class UnitOfWorkAuthentication : IUnitOfWorkAuthentication, IDisposable
    {
        protected AuthenticationDbContext context = new AuthenticationDbContext();
        public GenericRepository<User> UserRepository => new GenericRepository<User>(context);

        public GenericRepository<UserLogin> UserLoginRepository => new GenericRepository<UserLogin>(context);

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
