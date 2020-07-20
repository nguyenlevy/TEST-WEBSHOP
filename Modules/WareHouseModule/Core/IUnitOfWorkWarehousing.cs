using System.Threading.Tasks;
using WarehousingModule.Models.Carriers;
using WarehousingModule.Models.Employees;
using WarehousingModule.Models.Inventories;
using WarehousingModule.Models.OrderItems;
using WarehousingModule.Models.OrderNotes;
using WarehousingModule.Models.Orders;
using WarehousingModule.Models.PaymentMethods;
using WarehousingModule.Models.Shipments;
using WarehousingModule.Models.Stores;

namespace WarehousingModule.Core
{
    public interface IUnitOfWorkWarehousing
    {
        Task Commit();

        GenericRepository<Order> OrderRepository { get; }
        GenericRepository<OrderItem> OrderItemRepository { get; }
        GenericRepository<OrderNote> OrderNoteRepository { get; }
        GenericRepository<Shipment> ShipmentRepository { get; }
        GenericRepository<Store> StoreRepository { get; }
        GenericRepository<Carrier> CarrierRepository { get; }
        GenericRepository<Employee> EmployeeRepository { get; }
        GenericRepository<PaymentMethod> PaymentMethodRepository { get; }
        GenericRepository<Inventory> InventoryRepository { get; }
    }
}
