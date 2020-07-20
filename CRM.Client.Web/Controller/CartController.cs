//using Core.Core;
//using Core.Core.Helper;
using Core.Core;
using Core.Core.Helper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
//using CartModule.Services.Carts;
//using CartModule.Services.Carts;


using System;
using System.Threading.Tasks;
using WebClient.Models.Dto;
using WebClient.Services;
using WebClientService.Services;
//using WebClient.;

namespace CRM.Controllers.WebClient
{
    [Route("api/Carts")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly LogService _logService;
        public CartController(
            LogService logService)
        {
            _logService = logService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            const string loggerHeader = "GetCarts -";
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
		public async Task<IActionResult> Create([FromQuery] int productID, [FromQuery] int quantity)
		{
			const string loggerHeader = "Create Cart -";
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

		[HttpPut]
		public async Task<IActionResult> Update([FromQuery] int productID, [FromQuery] int quantity)
		{
			const string loggerHeader = "Update Cart -";
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
			const string loggerHeader = "Delete Cart -";
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