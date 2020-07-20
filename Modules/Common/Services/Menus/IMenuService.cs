using Common.Modes.Menu.Dto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Common.Services.Menus
{
    public interface IMenuService
    {
        Task<List<MenuDto>> GetMenusByUserRoles(MenuFilter menuFilter);
    }
}
