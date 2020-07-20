using Authentication.Models.Users;
using Authentication.Models.Users.Dto;
using System.Threading.Tasks;

namespace Authentication.Services.Login
{
    public interface ILoginService
    {
        Task<UserDto> Login(string userName, string password);
        Task Logout(UserLogin userLogin);
    }
}
