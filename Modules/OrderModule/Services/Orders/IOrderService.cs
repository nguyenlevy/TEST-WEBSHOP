using Core.Core;
using OrderModule.Models.Orders;
using OrderModule.Models.Orders.Dto;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrderModule.Services.Orders
{
    public interface IOrderService
    {
        Task<List<OrderDto>> GetByFilter(OrderFilter orderFilter);
        Task<ApiJsonResult> Create(int? tenantId, long userId, OrderItemDto data);
        Task<ApiJsonResult> Update(int? tenantId, long userId, int orderId, OrderItemDto data);
        Task<ApiJsonResult> Delete(int? tenantId, long userId, int id);
        IQueryable<Order> GetById(int id);
    }
}
