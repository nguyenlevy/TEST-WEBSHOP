using CustomerModule.Services.Customers;
using CustomerModule.Services.Suppliers;
using Microsoft.Extensions.DependencyInjection;

namespace CustomerModule.Core
{
    public static class DIService
    {
        public static IServiceCollection AddFeatureServiceCustomer(this IServiceCollection services)
        {
            services.AddScoped<IUnitOfWorkCustomer, UnitOfWorkCustomer>();
            services.AddScoped<CustomerDbContext>();
            services.AddScoped<ICustomerService, CustomerService>();
            services.AddScoped<ISupplierService, SupplierService>();

            return services;
        }
    }
}
