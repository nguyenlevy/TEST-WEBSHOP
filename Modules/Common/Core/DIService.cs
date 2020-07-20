using Authentication.Core;
using Common.Services.Categories;
using Common.Services.Menus;
using Core.Core.Helper;
using Microsoft.Extensions.DependencyInjection;

namespace Common.Core
{
    public static class DIService
    {
        public static IServiceCollection AddFeatureServiceCommon(this IServiceCollection services)
        {
            services.AddScoped<IUnitOfWorkCommon, UnitOfWorkCommon>();
            services.AddScoped<CommonDbContext>();
            services.AddScoped<IMenuService, MenuService>();
            services.AddScoped<LogService>();
            services.AddScoped<ICategoryService, CategoryService>();

            return services;
        }
    }
}
