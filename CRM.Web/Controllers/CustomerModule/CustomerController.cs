using Authentication.Services.Users;
using Core.Core;
using Core.Core.Helper;
using CustomerModule.Models.Customers.Dto;
using CustomerModule.Services.Customers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace Sales.Controllers.CustomerModule
{
    [Authorize]
    [Route("api/customers")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerService _customerService;
        private readonly IUserService _userService;
        private readonly LogService _logService;
        public CustomerController(
            ICustomerService customerService,
            IUserService userService,
            LogService logService)
        {
            _customerService = customerService;
            _userService = userService;
            _logService = logService;
        }

        [HttpGet]
        public async Task<IActionResult> GetCustomers([FromQuery] int? customerId, [FromQuery] string customerCode)
        {
            const string loggerHeader = "GetCustomers -";
            _logService.Info($"{loggerHeader} Start");
            var result = new ApiJsonResult();
            try
            {
                var userLogin = await _userService.GetCurrentUserLogin(HttpContext);
                _logService.Info($"{loggerHeader} with tenantId {userLogin?.TenantId}, customerId {customerId}, customerCode {customerCode}");
                var customerFilter = new CustomerFilter
                {
                    TenantId = userLogin.TenantId,
                    CustomerId = customerId,
                    CustomerCode = customerCode
                };
                result.Data = await _customerService.GetByFilter(customerFilter);
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
        public async Task<IActionResult> CreateCustomer([FromBody] CustomerDto data)
        {
            const string loggerHeader = "CreateCustomer -";
            _logService.Info($"{loggerHeader} Start");
            var result = new ApiJsonResult();
            try
            {
                var userLogin = await _userService.GetCurrentUserLogin(HttpContext);
                _logService.Info($"{loggerHeader} Create with tenantId {userLogin.TenantId}");
                result = await _customerService.Create(userLogin.TenantId, data);
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
        public async Task<IActionResult> UpdateCustomer([FromBody] CustomerDto data)
        {
            const string loggerHeader = "UpdateCustomer -";
            _logService.Info($"{loggerHeader} Start");
            var result = new ApiJsonResult();
            try
            {
                var userLogin = await _userService.GetCurrentUserLogin(HttpContext);
                _logService.Info($"{loggerHeader} Update with tenantId {userLogin.TenantId}");
                result = await _customerService.Update(userLogin.TenantId, data);
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
        public async Task<IActionResult> DeleteCustomer([FromQuery] int id)
        {
            const string loggerHeader = "DeleteCustomer -";
            var result = new ApiJsonResult();
            try
            {
                _logService.Info($"{loggerHeader} Delete with id {id}");
                result = await _customerService.Delete(id);
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