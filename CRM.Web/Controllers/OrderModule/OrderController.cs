using Authentication.Services.Users;
using Core.Core;
using Core.Core.Helper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OrderModule.Models.Orders;
using OrderModule.Models.Orders.Dto;
using OrderModule.Services.Orders;
using System;
using System.Threading.Tasks;

namespace Sales.Controllers.OrderModule
{
    [Authorize]
    [Route("api/orders")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _orderService;
        private readonly IUserService _userService;
        private readonly LogService _logService;

        public OrderController(
            IOrderService orderService,
            IUserService userService,
            LogService logService)
        {
            _orderService = orderService;
            _userService = userService;
            _logService = logService;
        }

        [HttpGet]
        public async Task<IActionResult> GetOrders([FromQuery] int? orderId)
        {
            const string loggerHeader = "GetOrders -";
            _logService.Info($"{loggerHeader} Start");
            var result = new ApiJsonResult();
            try
            {
                var userLogin = await _userService.GetCurrentUserLogin(HttpContext);
                _logService.Info($"{loggerHeader} with tenantId {userLogin?.TenantId}");
                var orderFilter = new OrderFilter
                {
                    TenantId = userLogin.TenantId,
                    OrderId = orderId
                };
                result.Data = await _orderService.GetByFilter(orderFilter);
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
        public async Task<IActionResult> DeleteOrder([FromQuery] int id)
        {
            const string loggerHeader = "DeleteOrder -";
            var result = new ApiJsonResult();
            try
            {
                var userLogin = await _userService.GetCurrentUserLogin(HttpContext);
                _logService.Info($"{loggerHeader} with tenantId {userLogin?.TenantId}");
                _logService.Info($"{loggerHeader} Delete with id {id}");
                result = await _orderService.Delete(userLogin.TenantId, userLogin.UserId ,id);
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
        public async Task<IActionResult> CreateOrder([FromBody] OrderItemDto data)
        {
            const string loggerHeader = "CreateOrder -";
            var result = new ApiJsonResult();
            try
            {
                var userLogin = await _userService.GetCurrentUserLogin(HttpContext);
                data.StoreId = userLogin.StoreId;
                _logService.Info($"{loggerHeader} Create with tenantId {userLogin.TenantId} and orderType {data.OrderType}");
                result = await _orderService.Create(userLogin.TenantId, userLogin.UserId, data);
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
        public async Task<IActionResult> UpdateOrder([FromQuery] int? orderId, [FromBody] OrderItemDto data)
        {
            const string loggerHeader = "UpdateOrder -";
            var result = new ApiJsonResult();
            try
            {
                var userLogin = await _userService.GetCurrentUserLogin(HttpContext);
                data.StoreId = userLogin.StoreId;
                _logService.Info($"{loggerHeader} Update with tenantId {userLogin.TenantId} and orderType {data.OrderType}");
                result = await _orderService.Update(userLogin.TenantId, userLogin.UserId, orderId.Value, data);
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