using Authentication.Models.Users;
using Authentication.Models.Users.Dto;
using Authentication.Services.Login;
using Authentication.Services.Users;
using AutoMapper;
using Core.Core;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Sales.Controllers.Authentication
{
    [Route("api")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly ILoginService _loginService;
        private readonly IUserService _userService;
        private readonly IMapper _mapper;
        public LoginController(
            ILoginService loginService,
            IUserService userService,
            IMapper mapper)
        {
            _loginService = loginService;
            _userService = userService;
            _mapper = mapper;
        }

        [AllowAnonymous]
        [Route("login")]
        [HttpPost]
        public async Task<IActionResult> Login([FromBody] UserDto userDto)
        {
            var userLogin = await _loginService.Login(userDto.Username, userDto.Password);
            var result = new ApiJsonResult();
            if (userLogin == null)
            {
                result.Code = CodeModel.Fail;
                return BadRequest(result);
            }
            result.Data = userLogin;
            return Ok(result);
        }

        [Authorize]
        [Route("logout")]
        [HttpPost]
        public async Task<IActionResult> Logout()
        {
            var userLogin = await _userService.GetCurrentUserLogin(HttpContext);
            var result = new ApiJsonResult();   
            await _loginService.Logout(_mapper.Map<UserLogin>(userLogin));
            HttpContext.User = null;
            return Ok(result);
        }
    }
}