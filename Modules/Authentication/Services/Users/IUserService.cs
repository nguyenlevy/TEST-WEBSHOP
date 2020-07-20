using Authentication.Models.Users;
using Authentication.Models.Users.Dto;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace Authentication.Services.Users
{
    public interface IUserService
    {
        Task<User> Authenticate(string username, string password);
        Task<UserLoginDto> GetCurrentUserLogin(HttpContext httpContext);
    }
}
