using Authentication.Services.Users;
using Core.Core;
using Core.Core.Helper;
using CustomerModule.Models.Customers.Dto;
using CustomerModule.Services.Suppliers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace Sales.Controllers.CustomerModule
{
    [Authorize]
    [Route("api/suppliers")]
    [ApiController]
    public class SupplierController : ControllerBase
    {
        private readonly ISupplierService _supplierService;
        private readonly IUserService _userService;
        private readonly LogService _logService;
        public SupplierController(
            ISupplierService supplierService,
            IUserService userService,
            LogService logService)
        {
            _supplierService = supplierService;
            _userService = userService;
            _logService = logService;
        }

        [HttpGet]
        public async Task<IActionResult> GetSuppliers([FromQuery] int? customerId, [FromQuery] string customerCode)
        {
            const string loggerHeader = "GetSuppliers -";
            _logService.Info($"{loggerHeader} Start");
            var result = new ApiJsonResult();
            try
            {
                var userLogin = await _userService.GetCurrentUserLogin(HttpContext);
                _logService.Info($"{loggerHeader} with tenantId {userLogin?.TenantId}, customerId {customerId}, customerCode {customerCode}");
                var supplierFilter = new SupplierFilter
                {
                    TenantId = userLogin.TenantId,
                    CustomerId = customerId,
                    CustomerCode = customerCode
                };
                result.Data = await _supplierService.GetByFilter(supplierFilter);
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
        public async Task<IActionResult> CreateSupplier([FromBody] SupplierDto data)
        {
            const string loggerHeader = "CreateSupplier -";
            _logService.Info($"{loggerHeader} Start");
            var result = new ApiJsonResult();
            try
            {
                var userLogin = await _userService.GetCurrentUserLogin(HttpContext);
                _logService.Info($"{loggerHeader} Create with tenantId {userLogin.TenantId}");
                result = await _supplierService.Create(userLogin.TenantId, data);
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
        public async Task<IActionResult> UpdateSupplier([FromBody] SupplierDto data)
        {
            const string loggerHeader = "UpdateSupplier -";
            _logService.Info($"{loggerHeader} Start");
            var result = new ApiJsonResult();
            try
            {
                var userLogin = await _userService.GetCurrentUserLogin(HttpContext);
                _logService.Info($"{loggerHeader} Update with tenantId {userLogin.TenantId}");
                result = await _supplierService.Update(userLogin.TenantId, data);
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
        public async Task<IActionResult> DeleteSupplier([FromQuery] int id)
        {
            const string loggerHeader = "DeleteSupplier -";
            var result = new ApiJsonResult();
            try
            {
                _logService.Info($"{loggerHeader} Delete with id {id}");
                result = await _supplierService.Delete(id);
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