using Authentication.Models.Users;
using Authentication.Models.Users.Dto;
using AutoMapper;

namespace Authentication.Core
{
    public class AutoMappingAuthentication : Profile
    {
        public AutoMappingAuthentication()
        {
            CreateMap<User, UserDto>()
                .ReverseMap();
            CreateMap<UserLogin, UserLoginDto>()
                .ReverseMap();
        }
    }
}
