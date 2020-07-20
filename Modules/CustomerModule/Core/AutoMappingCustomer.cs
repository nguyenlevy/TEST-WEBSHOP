using AutoMapper;
using CustomerModule.Models.Customers;
using CustomerModule.Models.Customers.Dto;

namespace CustomerModule.Core
{
    public class AutoMappingCustomer : Profile
    {
        public AutoMappingCustomer()
        {
            CreateMap<Customer, CustomerDto>();
            CreateMap<CustomerDto, Customer>();
            CreateMap<Customer, SupplierDto>();
            CreateMap<SupplierDto, Customer>();
        }
    }
}
