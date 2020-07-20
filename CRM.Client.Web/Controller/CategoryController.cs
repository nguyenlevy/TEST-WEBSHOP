//using Core.Core;
//using Core.Core.Helper;
using Core.Core;
using Core.Core.Helper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
//using CategoryModule.Services.Categorys;
//using CategoryModule.Services.Categorys;


using System;
using System.Threading.Tasks;
using WebClient.Models.Dto;
using WebClient.Services;
using WebClientService.Services;
//using WebClient.;

namespace CRM.Controllers.WebClient
{
    [Route("api/Categorys")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryService _CategoryService;
        private readonly LogService _logService;
        public CategoryController(
            ICategoryService CategoryService,
            LogService logService)
        {
            _CategoryService = CategoryService;
            _logService = logService;
        }
        [HttpGet]
        public async Task<IActionResult> Get([FromQuery] CategorySearchModel searchmodel)
        {
            const string loggerHeader = "GetCategorys -";
            _logService.Info($"{loggerHeader} Start");
            var result = new ApiJsonResult();
            try
            {
                if(searchmodel.TypeSearch == (int)TypeSearchCategory.ByMenuCategory)
                    result.Data = await _CategoryService.GetMenuCategory();
               if (searchmodel.TypeSearch == (int)TypeSearchCategory.ByGetOneId)
                    result.Data = await _CategoryService.GetOneId(searchmodel.CategoryID);
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