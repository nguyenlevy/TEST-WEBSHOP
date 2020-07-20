using AutoMapper;
using OrderModule.Models.Carriers;
using OrderModule.Models.Carriers.Dto;
using OrderModule.Models.Employees;
using OrderModule.Models.Employees.Dto;
using OrderModule.Models.Orders;
using OrderModule.Models.Orders.Dto;
using OrderModule.Models.PaymentMethods;
using OrderModule.Models.PaymentMethods.Dto;
using OrderModule.Models.Stores;
using OrderModule.Models.Stores.Dto;

namespace OrderModule.Core
{
    public class AutoMappingOrder : Profile
    {
        public AutoMappingOrder()
        {
            CreateMap<Order, OrderDto>();
            CreateMap<OrderDto, Order>();
            CreateMap<Carrier, CarrierDto>();
            CreateMap<Employee, EmployeeDto>();
            CreateMap<PaymentMethod, PaymentMethodDto>();
            CreateMap<Store, StoreDto>();
        }
    }
}
