//using Core.Core;
//using Core.Core.Helper;
using Core.Core;
using Core.Core.Helper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
//using ViewedModule.Services.Vieweds;
//using ViewedModule.Services.Vieweds;


using System;
using System.Threading.Tasks;
using WebClient.Models.Dto;
using WebClient.Services;
using WebClientService.Services;
//using WebClient.;

namespace CRM.Controllers.WebClient
{
    [Route("api/Vieweds")]
    [ApiController]
    public class ViewedController : ControllerBase
    {
        private readonly LogService _logService;
        public ViewedController(
            LogService logService)
        {
            _logService = logService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            const string loggerHeader = "GetVieweds -";
            _logService.Info($"{loggerHeader} Start");
            var result = new ApiJsonResult();
            try
            {
            }
            catch (Exception ex)
            {
                _logService.Error($"{loggerHeader} Throw error {ex.Message}");
                result.Code = CodeModel.Fail;
                result.Message = ex.Message;
            }

            return Ok(result);
        }

		[HttpPost]
		public async Task<IActionResult> Create([FromQuery] int productID)
		{
			const string loggerHeader = "Create Viewed -";
			_logService.Info($"{loggerHeader} Start");
			var result = new ApiJsonResult();
			try
			{
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
		public async Task<IActionResult> Delete([FromQuery] int productID)
		{
			const string loggerHeader = "Delete Viewed -";
			_logService.Info($"{loggerHeader} Start");
			var result = new ApiJsonResult();
			try
			{
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