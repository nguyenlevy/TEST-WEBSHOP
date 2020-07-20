using OrderModule.Models.UserModified;
using System.Threading.Tasks;

namespace OrderModule.Services.Inventories
{
    public interface IInventoryOrderService
    {
        Task UpdateAllInventories(int orderId, UserModified userModified);
    }
}
