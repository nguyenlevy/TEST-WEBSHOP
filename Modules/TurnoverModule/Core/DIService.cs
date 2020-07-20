using Microsoft.Extensions.DependencyInjection;
using TurnoverModule.Services;

namespace TurnoverModule.Core
{
    public static class DIService
    {
        public static IServiceCollection AddFeatureServiceTurnover(this IServiceCollection services)
        {
            services.AddScoped<IUnitOfWorkTurnover, UnitOfWorkTurnover>();
            services.AddScoped<TurnoverDbContext>();
            services.AddScoped<ITurnoverService, TurnoverService>();

            return services;
        }
    }
}
