using Microsoft.Extensions.DependencyInjection;
using OrderModule.Services.Carriers;
using OrderModule.Services.Employees;
using OrderModule.Services.Inventories;
using OrderModule.Services.Orders;
using OrderModule.Services.PaymentMethods;
using OrderModule.Services.Stores;

namespace OrderModule.Core
{
    public static class DIService
    {
        public static IServiceCollection AddFeatureServiceOrder(this IServiceCollection services)
        {
            services.AddScoped<IUnitOfWorkOrder, UnitOfWorkOrder>();
            services.AddScoped<OrderDbContext>();
            services.AddScoped<ICarrierService, CarrierService>();
            services.AddScoped<IEmployeeService, EmployeeService>();
            services.AddScoped<IInventoryOrderService, InventoryOrderService>();
            services.AddScoped<IOrderService, OrderService>();
            services.AddScoped<IPaymentMethodService, PaymentMethodService>();
            services.AddScoped<IStoreService, StoreService>();

            return services;
        }
    }
}
