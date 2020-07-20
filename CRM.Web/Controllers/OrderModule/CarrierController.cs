using Authentication.Services.Users;
using Core.Core;
using Core.Core.Helper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OrderModule.Services.Carriers;
using System;
using System.Threading.Tasks;

namespace Sales.Controllers.OrderModule
{
    [Authorize]
    [Route("api/carriers")]
    [ApiController]
    public class CarrierController : ControllerBase
    {
        private readonly ICarrierService _carrierService;
        private readonly IUserService _userService;
        private readonly LogService _logService;

        public CarrierController(
            ICarrierService carrierService,
            IUserService userService,
            LogService logService)
        {
            _carrierService = carrierService;
            _userService = userService;
            _logService = logService;
        }

        [HttpGet]
        public async Task<IActionResult> GetCarriers()
        {
            const string loggerHeader = "GetCarriers -";
            _logService.Info($"{loggerHeader} Start");
            var result = new ApiJsonResult();
            try
            {
                var userLogin = await _userService.GetCurrentUserLogin(HttpContext);
                _logService.Info($"{loggerHeader} with tenantId {userLogin?.TenantId}");
                result.Data = await _carrierService.GetAll(userLogin?.TenantId);
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