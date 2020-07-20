using Authentication.Core;
using Authentication.Models.Claims;
using Authentication.Models.Users;
using Authentication.Models.Users.Dto;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Authentication.Services.Users
{
    public class UserService : IUserService
    {
        private readonly IUnitOfWorkAuthentication _unitOfWork;
        private readonly IMapper _mapper;
        public UserService(
            IUnitOfWorkAuthentication unitOfWork,
            IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }
        public async Task<User> Authenticate(string username, string password)
        {
            return await _unitOfWork.UserRepository.FindByCondition(u => u.Username == username && u.Password == password)
                .AsNoTracking().FirstOrDefaultAsync();
        }

        public async Task<UserLoginDto> GetCurrentUserLogin(HttpContext httpContext)
        {
            var identity = httpContext.User.Identity as ClaimsIdentity;
            IList<Claim> claims = identity.Claims.ToList();
            int? userId = null;
            if (claims.Any())
            {
                userId = int.Parse(claims[(int)ClaimType.UserId].Value);
            }
            var reuslt = await _unitOfWork.UserLoginRepository.FindByCondition(u => u.UserId == userId.Value)
                .AsNoTracking().FirstOrDefaultAsync();
            return _mapper.Map<UserLoginDto>(reuslt);
        }
    }
}
