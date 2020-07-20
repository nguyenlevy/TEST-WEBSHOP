using AutoMapper;
using WebClient.Models;
using WebClient.Models.Dto;

namespace WebClient.Core
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
