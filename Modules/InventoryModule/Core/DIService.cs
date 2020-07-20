using InventoryModule.Services.Inventories;
using Microsoft.Extensions.DependencyInjection;
using WarehousingModule.Core;

namespace InventoryModule.Core
{
    public static class DIService
    {
        public static IServiceCollection AddFeatureServiceInventory(this IServiceCollection services)
        {
            services.AddScoped<IUnitOfWorkInventory, UnitOfWorkInventory>();
            services.AddScoped<InventoryDbContext>();
            services.AddScoped<IInventoryService, InventoryService>();

            return services;
        }
    }
}
