using BalanceModule.Services.Balances;
using BalanceModule.Services.Costs;
using Microsoft.Extensions.DependencyInjection;

namespace BalanceModule.Core
{
    public static class DIService
    {
        public static IServiceCollection AddFeatureServiceBalance(this IServiceCollection services)
        {
            services.AddScoped<IUnitOfWorkBalance, UnitOfWorkBalance>();
            services.AddScoped<BalanceDbContext>();
            services.AddScoped<IBalanceService, BalanceService>();
            services.AddScoped<ICostService, CostService>();

            return services;
        }
    }
}
