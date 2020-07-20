using AutoMapper;
using Common.Models.Products;
using Common.Models.Products.Dto;

namespace ProductModule.Core
{
    public class AutoMappingProduct : Profile
    {
        public AutoMappingProduct()
        {
            CreateMap<Product, ProductDto>();
            CreateMap<ProductDto, Product>();
            CreateMap<ProductCategory, ProductCategoryDto>();
            CreateMap<ProductCategoryDto, ProductCategory>();
        }
    }
}
