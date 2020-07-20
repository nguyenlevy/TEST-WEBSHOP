using Microsoft.Extensions.DependencyInjection;
using ProfitModule.Services;

namespace ProfitModule.Core
{
    public static class DIService
    {
        public static IServiceCollection AddFeatureServiceProfit(this IServiceCollection services)
        {
            services.AddScoped<IUnitOfWorkProfit, UnitOfWorkProfit>();
            services.AddScoped<ProfitDbContext>();
            services.AddScoped<IProfitService, ProfitService>();

            return services;
        }
    }
}
