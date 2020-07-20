using Microsoft.Extensions.DependencyInjection;
using OverviewModule.Services.Overviews;

namespace OverviewModule.Core
{
    public static class DIService
    {
        public static IServiceCollection AddFeatureServiceOverview(this IServiceCollection services)
        {
            services.AddScoped<IUnitOfWorkOverview, UnitOfWorkOverview>();
            services.AddScoped<OverviewDbContext>();
            services.AddScoped<IOverviewService, OverviewService>();
            return services;
        }
    }
}
