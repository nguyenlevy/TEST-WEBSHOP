using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebClient.Models;
using WebClient.Models.Dto;

namespace WebClientService.Services
{
    public interface ICategoryService
    {
        IQueryable<Category> GetById(int id);
        //Task<List<Category>> GetMenuCategory();
        Task<List<Category>> GetSubCategorys(int Category);
        Task<List<CategoryListDto>> GetOneId(int id);
        Task<List<CategoryListDto>> GetMenuCategory();

    }
}
