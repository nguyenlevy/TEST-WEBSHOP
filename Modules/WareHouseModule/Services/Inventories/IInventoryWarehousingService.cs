using System;
using System.Threading.Tasks;
using WarehousingModule.Models.Orders;
using WarehousingModule.Models.UserModified;

namespace WarehousingModule.Services.Inventories
{
    public interface IInventoryWarehousingService
    {
        Task UpdateAllInventories(int orderId, DateTime? warehousingDate, UserModified userModified);
    }
}
