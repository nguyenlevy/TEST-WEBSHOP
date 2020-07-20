using AutoMapper;
using WarehousingModule.Models.Carriers;
using WarehousingModule.Models.Carriers.Dto;
using WarehousingModule.Models.Employees;
using WarehousingModule.Models.Employees.Dto;
using WarehousingModule.Models.Orders;
using WarehousingModule.Models.Orders.Dto;
using WarehousingModule.Models.PaymentMethods;
using WarehousingModule.Models.PaymentMethods.Dto;

namespace WarehousingModule.Core
{
    public class AutoMappingWarehousing : Profile
    {
        public AutoMappingWarehousing()
        {
            CreateMap<Order, OrderDto>();
            CreateMap<OrderDto, Order>();
            CreateMap<Carrier, CarrierDto>();
            CreateMap<Employee, EmployeeDto>();
            CreateMap<PaymentMethod, PaymentMethodDto>();
        }
    }
}
