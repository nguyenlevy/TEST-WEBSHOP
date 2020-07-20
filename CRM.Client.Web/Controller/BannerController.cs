//using Core.Core;
//using Core.Core.Helper;
using Core.Core;
using Core.Core.Helper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyModel;
//using BannerModule.Services.Banners;
//using BannerModule.Services.Banners;


using System;
using System.IO;
using System.Threading.Tasks;
using WebClient.Models;
using WebClient.Models.Dto;
using WebClient.Services;
using WebClientService.Services;
//using WebClient.;

namespace CRM.Controllers.WebClient
{
    [Route("api/Banners")]
    [ApiController]
    public class BannerController : ControllerBase
    {
        private readonly IBannerService _BannerService;
        private readonly LogService _logService;
        private readonly IHostingEnvironment _environment;
        public BannerController(
            IBannerService BannerService,
            IHostingEnvironment environment,
            LogService logService)
        {
            _BannerService = BannerService;
            _logService = logService;
            _environment = environment;
        }
      
        [HttpGet]
        public async Task<IActionResult> Get()
       {
            const string loggerHeader = "GetBanners -";
            _logService.Info($"{loggerHeader} Start");
            var result = new ApiJsonResult();
            try
            {
                result.Data = await _BannerService.GetAll();
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