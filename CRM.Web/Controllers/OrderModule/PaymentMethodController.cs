using Authentication.Services.Users;
using Core.Core;
using Core.Core.Helper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OrderModule.Services.PaymentMethods;
using System;
using System.Threading.Tasks;

namespace Sales.Controllers.OrderModule
{
    [Authorize]
    [Route("api/payment_methods")]
    [ApiController]
    public class PaymentMethodController : ControllerBase
    {
        private readonly IPaymentMethodService _paymentMethodService;
        private readonly IUserService _userService;
        private readonly LogService _logService;

        public PaymentMethodController(
            IPaymentMethodService paymentMethodService,
            IUserService userService,
            LogService logService)
        {
            _paymentMethodService = paymentMethodService;
            _userService = userService;
            _logService = logService;
        }

        [HttpGet]
        public async Task<IActionResult> GetPaymentMethods()
        {
            const string loggerHeader = "GetPaymentMethods -";
            _logService.Info($"{loggerHeader} Start");
            var result = new ApiJsonResult();
            try
            {
                var userLogin = await _userService.GetCurrentUserLogin(HttpContext);
                _logService.Info($"{loggerHeader} with tenantId {userLogin?.TenantId}");
                result.Data = await _paymentMethodService.GetAll(userLogin?.TenantId);
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