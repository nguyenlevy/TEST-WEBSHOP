using CustomerModule.Services.Warehousings;
using Microsoft.Extensions.DependencyInjection;
using WarehousingModule.Services.Inventories;
using WarehousingModule.Services.Warehousings;

namespace WarehousingModule.Core
{
    public static class DIService
    {
        public static IServiceCollection AddFeatureServiceWarehousing(this IServiceCollection services)
        {
            services.AddScoped<IUnitOfWorkWarehousing, UnitOfWorkWarehousing>();
            services.AddScoped<WarehousingDbContext>();
            services.AddScoped<IWarehousingService, WarehousingService>();
            services.AddScoped<IInventoryWarehousingService, InventoryWarehousingService>();

            return services;
        }
    }
}
