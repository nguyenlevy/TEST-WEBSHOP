using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Core;
using Core.Core.Helper;
using Microsoft.AspNetCore.Mvc;
using WebClientService.Services;

namespace CRM.Controllers.WebClient
{
    [Route("api/Brands")]
    [ApiController]
    public class BrandController : ControllerBase
    {
        private readonly IBrandService _BrandService;
        private readonly LogService _logService;
        public BrandController(
            IBrandService BrandService,
            LogService logService)
        {
            _BrandService = BrandService;
            _logService = logService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            const string loggerHeader = "GetBrand -";
            _logService.Info($"{loggerHeader} Start");
            var result = new ApiJsonResult();
            try
            {
                    result.Data = await _BrandService.GetAll();
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
