using Authentication.Models.Users;
using System.Threading.Tasks;

namespace Authentication.Core
{
    public interface IUnitOfWorkAuthentication
    {
        Task Commit();
        GenericRepository<User> UserRepository { get; }
        GenericRepository<UserLogin> UserLoginRepository { get; }
    }
}
