using Core.Core;
using WarehousingModule.Models.Orders;
using WarehousingModule.Models.Orders.Dto;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WarehousingModule.Models.UserModified;

namespace WarehousingModule.Services.Warehousings
{
    public interface IWarehousingService
    {
        Task<List<OrderDto>> GetByFilter(OrderFilter orderFilter);
        Task<ApiJsonResult> Create(UserModified userModified, OrderItemDto data);
        Task<ApiJsonResult> Update(UserModified userModified, int orderId, OrderItemDto data);
        Task<ApiJsonResult> Delete(UserModified userModified, int id);
        IQueryable<Order> GetById(int id);
    }
}
