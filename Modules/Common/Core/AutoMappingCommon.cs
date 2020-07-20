using AutoMapper;
using Common.Models.Categories;
using Common.Modes.Categories.Dto;
using Common.Modes.Menu;
using Common.Modes.Menu.Dto;

namespace Common.Core
{
    public class AutoMappingCommon : Profile
    {
        public AutoMappingCommon()
        {
            CreateMap<Menu, MenuDto>();
            CreateMap<Category, CategoryDto>();
            CreateMap<CategoryDto, Category>()
                .ForMember(x => x.ParentCategory, opt => opt.Ignore());
        }
    }
}
