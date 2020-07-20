using Common.Modes.Menu.Dto;
using Common.Services.Menus;
using Core.Core;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Sales.Controllers.Common
{
    [Authorize]
    [Route("api/common")]
    [ApiController]
    public class CommonController : ControllerBase
    {
        private readonly IMenuService _menuService;
        public CommonController(
                IMenuService menuService
            )
        {
            _menuService = menuService;
        }

        [Route("menus")]
        [HttpGet]
        public async Task<IActionResult> GetMenus()
        {
            var result = new ApiJsonResult();
            var menuFileter = new MenuFilter();
            result.Data = await _menuService.GetMenusByUserRoles(menuFileter);
            return Ok(result);
        }
    }
}