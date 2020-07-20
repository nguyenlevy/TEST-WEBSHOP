using Authentication.Services.Users;
using Core.Core;
using Core.Core.Helper;
using Microsoft.AspNetCore.Mvc;
using OrderModule.Services.Employees;
using System;
using System.Threading.Tasks;

namespace Sales.Controllers.OrderModule
{
    [Route("api/employees")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeService _employeeService;
        private readonly IUserService _userService;
        private readonly LogService _logService;

        public EmployeeController(
            IEmployeeService employeeService,
            IUserService userService,
            LogService logService)
        {
            _employeeService = employeeService;
            _userService = userService;
            _logService = logService;
        }

        [HttpGet]
        public async Task<IActionResult> GetEmployees()
        {
            const string loggerHeader = "GetEmployees -";
            _logService.Info($"{loggerHeader} Start");
            var result = new ApiJsonResult();
            try
            {
                var userLogin = await _userService.GetCurrentUserLogin(HttpContext);
                _logService.Info($"{loggerHeader} with tenantId {userLogin?.TenantId}");
                result.Data = await _employeeService.GetAll(userLogin?.TenantId);
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