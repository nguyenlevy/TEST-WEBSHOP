using Authentication.Core;
using Authentication.Models.Users;
using Authentication.Models.Users.Dto;
using Authentication.Services.Users;
using AutoMapper;
using Core.Core.Helper;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Authentication.Services.Login
{
    public class LoginService : ILoginService
    {
        private readonly IUnitOfWorkAuthentication _unitOfWork;
        private readonly IMapper _mapper;
        private readonly IUserService _userService;
        public LoginService(
                IUnitOfWorkAuthentication unitOfWork,
                IUserService userService,
                IMapper mapper
            )
        {
            _unitOfWork = unitOfWork;
            _userService = userService;
            _mapper = mapper;
        }
        public async Task<UserDto> Login(string username, string password)
        {
            var user = await _userService.Authenticate(username, password);
            if (user == null)
            {
                return null;
            }
            var securityKey = Encoding.ASCII.GetBytes(SalesConfiguration.GetSecurityKey());
            var expireDate = DateTime.UtcNow.AddMinutes(SalesConfiguration.GetExpireTime());
            var credentials = new SigningCredentials(new SymmetricSecurityKey(securityKey), SecurityAlgorithms.HmacSha256Signature);
            var claims = new[]
            {
                new Claim("user_id", user.Id.ToString()),
            };

            var tokenDescriptor = new JwtSecurityToken(
                issuer: SalesConfiguration.GetIssuer(),
                audience: SalesConfiguration.GetIssuer(),
                claims,
                expires: expireDate,
                signingCredentials: credentials
            );
            var userData = _mapper.Map<UserDto>(user);
            var token = new JwtSecurityTokenHandler().WriteToken(tokenDescriptor);
            userData.Token = token;

            var userLogin = new UserLogin
            {
                TenantId = user.TenantId,
                UserId = user.Id,
                Token = userData.Token,
                ExpireDate = expireDate,
                StoreId = user.StoreId
            };
            _unitOfWork.UserLoginRepository.Create(userLogin);
            await _unitOfWork.Commit();

            return userData;
        }

        public async Task Logout(UserLogin userLogin)
        {
            _unitOfWork.UserLoginRepository.Delete(userLogin);
            await _unitOfWork.Commit();
        }
    }
}
