using Microsoft.Extensions.DependencyInjection;
using ProductModule.Services.Products;
using ProductModule.Services.TaxCategories;

namespace ProductModule.Core
{
    public static class DIService
    {
        public static IServiceCollection AddFeatureServiceProduct(this IServiceCollection services)
        {
            services.AddScoped<IUnitOfWorkProduct, UnitOfWorkProduct>();
            services.AddScoped<ProductDbContext>();
            services.AddScoped<IProductManufacturerService, ProductManufacturerService>();
            services.AddScoped<IProductService, ProductService>();
            services.AddScoped<IProductStatusService, ProductStatusService>();
            services.AddScoped<IProductTypeService, ProductTypeService>();
            services.AddScoped<ITaxCategoryService, TaxCategoryService>();

            return services;
        }
    }
}
