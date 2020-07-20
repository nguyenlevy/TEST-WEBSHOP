using Common.Modes.Categories;
using Common.Modes.Categories.Dto;
using Common.Modes.UserLogin;
using Core.Core;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Common.Services.Categories
{
    public interface ICategoryService
    {
        Task<List<CategoryDto>> GetAll(CategoryFilter categoryFilter);
        Task<List<CategoryDto>> GetAllAndSub(CategoryFilter categoryFilter);
        Task<ApiJsonResult> Create(UserLogin userLogin, CategoryDto data);
        Task<ApiJsonResult> Update(UserLogin userLogin, CategoryDto data);
        Task<ApiJsonResult> Delete(int id);
    }
}
