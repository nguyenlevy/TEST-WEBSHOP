using System;
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
    public class UnitOfWorkWarehousing : IUnitOfWorkWarehousing, IDisposable
    {
        protected WarehousingDbContext context = new WarehousingDbContext();
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
