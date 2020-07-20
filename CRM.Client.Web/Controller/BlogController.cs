//using Core.Core;
//using Core.Core.Helper;
using Core.Core;
using Core.Core.Helper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
//using BlogModule.Services.Blogs;
//using BlogModule.Services.Blogs;


using System;
using System.Threading.Tasks;
using WebClient.Models.Dto;
using WebClient.Services;
using WebClientService.Services;
//using WebClient.;

namespace CRM.Controllers.WebClient
{
    [Route("api/Blogs")]
    [ApiController]
    public class BlogController : ControllerBase
    {
        private readonly IBlogService _BlogService;
        private readonly LogService _logService;
        public BlogController(
            IBlogService BlogService,
            LogService logService)
        {
            _BlogService = BlogService;
            _logService = logService;
        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery] BlogSearchModel searchmodel)
        {
            const string loggerHeader = "GetBlogs -";
            _logService.Info($"{loggerHeader} Start");
            var result = new ApiJsonResult();
            try
            {
                if (searchmodel.TypeSearch == (int)TypeSearchBlog.ByGetOneId)
                {
                        result.Data = _BlogService.GetById(searchmodel.Id);
                }
                else if (searchmodel.TypeSearch == (int)TypeSearchBlog.ByGetAllBlog)
                {
                    result.Data = await _BlogService.GetAll();
                }
                else if (searchmodel.TypeSearch == (int)TypeSearchBlog.ByGetBlogByCategory)
                {
                    result.Data = await _BlogService.GetBlogByCategory(searchmodel.CategoryID);
                }
                else if (searchmodel.TypeSearch == (int)TypeSearchBlog.ByGetCategory)
                {
                    result.Data = await _BlogService.GetBlogCategory();
                }

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