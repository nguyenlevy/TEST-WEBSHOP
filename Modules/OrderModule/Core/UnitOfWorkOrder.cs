using OrderModule.Models.Carriers;
using OrderModule.Models.Employees;
using OrderModule.Models.Inventories;
using OrderModule.Models.OrderItems;
using OrderModule.Models.OrderNotes;
using OrderModule.Models.Orders;
using OrderModule.Models.PaymentMethods;
using OrderModule.Models.Shipments;
using OrderModule.Models.Stores;
using System;
using System.Threading.Tasks;

namespace OrderModule.Core
{
    public class UnitOfWorkOrder : IUnitOfWorkOrder, IDisposable
    {
        protected OrderDbContext context = new OrderDbContext();

        public GenericRepository<Order> OrderRepository => new GenericRepository<Order>(context);

        public GenericRepository<Store> StoreRepository => new GenericRepository<Store>(context);

        public GenericRepository<Carrier> CarrierRepository => new GenericRepository<Carrier>(context);

        public GenericRepository<Employee> EmployeeRepository => new GenericRepository<Employee>(context);

        public GenericRepository<PaymentMethod> PaymentMethodRepository => new GenericRepository<PaymentMethod>(context);

        public GenericRepository<OrderItem> OrderItemRepository => new GenericRepository<OrderItem>(context);

        public GenericRepository<OrderNote> OrderNoteRepository => new GenericRepository<OrderNote>(context);

        public GenericRepository<Shipment> ShipmentRepository => new GenericRepository<Shipment>(context);

        public GenericRepository<Inventory> InventoryRepository => new GenericRepository<Inventory>(context);

        public async Task Commit()
        {
            await context.SaveChangesAsync();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
