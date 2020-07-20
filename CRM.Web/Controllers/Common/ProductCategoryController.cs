using Authentication.Services.Users;
using Common.Modes.Categories;
using Common.Modes.Categories.Dto;
using Common.Modes.UserLogin;
using Common.Services.Categories;
using Core.Core;
using Core.Core.Helper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace Sales.Controllers.Common
{
    [Authorize]
    [Route("api/common/product_categories")]
    [ApiController]
    public class ProductCategoryController : ControllerBase
    {
        private readonly ICategoryService _categoryService;
        private readonly LogService _logService;
        private readonly IUserService _userService;
        public ProductCategoryController(
                ICategoryService categoryService,
                LogService logService,
                IUserService userService
            )
        {
            _categoryService = categoryService;
            _userService = userService;
            _logService = logService;
        }

        [HttpGet]
        public async Task<IActionResult> GetCategories([FromQuery] int? id, [FromQuery] string name)
        {
            const string loggerHeader = "GetCategories";
            var result = new ApiJsonResult();
            try
            {
                var userLogin = await _userService.GetCurrentUserLogin(HttpContext);
                _logService.Info($"{loggerHeader} Get product categories with tenantId {userLogin?.TenantId}");
                var categoryFilter = new CategoryFilter
                {
                    TenantId = userLogin?.TenantId,
                    Id = id,
                    Name = name
                };
                result.Data = await _categoryService.GetAll(categoryFilter);
            }
            catch (Exception ex)
            {
                result.Code = CodeModel.Fail;
                result.Message = ex.Message;
            }

            return Ok(result);
        }
        [HttpGet]
        [Route("sub_categories")]
        public async Task<IActionResult> GetCategoriesAndSub([FromQuery] int? id)
        {
            const string loggerHeader = "GetCategoriesAndSub";
            var result = new ApiJsonResult();
            try
            {
                var userLogin = await _userService.GetCurrentUserLogin(HttpContext);
                _logService.Info($"{loggerHeader} Get product categories with tenantId {userLogin?.TenantId}");
                var categoryFilter = new CategoryFilter
                {
                    TenantId = userLogin?.TenantId,
                    Id = id
                };
                result.Data = await _categoryService.GetAllAndSub(categoryFilter);
            }
            catch (Exception ex)
            {
                result.Code = CodeModel.Fail;
                result.Message = ex.Message;
            }

            return Ok(result);
        }
        [HttpPost]
        public async Task<IActionResult> CreateCategory([FromBody] CategoryDto data)
        {
            const string loggerHeader = "CreateCategory -";
            _logService.Info($"{loggerHeader} Start");
            var result = new ApiJsonResult();
            try
            {
                var userLogin = await _userService.GetCurrentUserLogin(HttpContext);
                _logService.Info($"{loggerHeader} Create category with tenantId {userLogin.TenantId}");
                var user = new UserLogin
                {
                    TenantId = userLogin.TenantId,
                    UserId = userLogin.UserId
                };
                result = await _categoryService.Create(user, data);
            }
            catch (Exception ex)
            {
                _logService.Error($"{loggerHeader} Throw error {ex.Message}");
                result.Code = CodeModel.Fail;
                result.Message = ex.Message;
            }

            return Ok(result);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateCategory([FromBody] CategoryDto data)
        {
            const string loggerHeader = "UpdateProduct -";
            _logService.Info($"{loggerHeader} Start");
            var result = new ApiJsonResult();
            try
            {
                var userLogin = await _userService.GetCurrentUserLogin(HttpContext);
                _logService.Info($"{loggerHeader} Update category with tenantId {userLogin.TenantId}");
                var user = new UserLogin
                {
                    TenantId = userLogin.TenantId,
                    UserId = userLogin.UserId
                };
                result = await _categoryService.Update(user, data);
            }
            catch (Exception ex)
            {
                _logService.Error($"{loggerHeader} Throw error {ex.Message}");
                result.Code = CodeModel.Fail;
                result.Message = ex.Message;
            }

            return Ok(result);
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteCategory([FromQuery] int id)
        {
            const string loggerHeader = "DeleteProduct -";
            var result = new ApiJsonResult();
            try
            {
                _logService.Info($"{loggerHeader} Delete category with id {id}");
                result = await _categoryService.Delete(id);
            }
            catch (Exception ex)
            {
                _logService.Error($"{loggerHeader} Throw error {ex.Message}");
                result.Code = CodeModel.Fail;
                result.Message = ex.Message;
            }

            return Ok(result);
        }
    }
}