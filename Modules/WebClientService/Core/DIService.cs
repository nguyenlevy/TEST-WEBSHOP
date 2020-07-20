using Microsoft.Extensions.DependencyInjection;

namespace WebClient.Core
{
    public static class DIService
    {
        public static IServiceCollection AddFeatureServiceProduct(this IServiceCollection services)
        {
            services.AddScoped<IUnitOfWorkWebClient, UnitOfWorkWebClient>();
            services.AddScoped<WebClientDbContext>();
            return services;
        }
    }
}
