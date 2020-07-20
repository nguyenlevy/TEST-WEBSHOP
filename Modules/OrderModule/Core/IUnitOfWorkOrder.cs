using OrderModule.Models.Carriers;
using OrderModule.Models.Employees;
using OrderModule.Models.Inventories;
using OrderModule.Models.OrderItems;
using OrderModule.Models.OrderNotes;
using OrderModule.Models.Orders;
using OrderModule.Models.PaymentMethods;
using OrderModule.Models.Shipments;
using OrderModule.Models.Stores;
using System.Threading.Tasks;

namespace OrderModule.Core
{
    public interface IUnitOfWorkOrder
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
