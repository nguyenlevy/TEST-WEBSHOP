using AutoMapper;
using BalanceModule.Models.Balances;
using BalanceModule.Models.Balances.Dto;
using BalanceModule.Models.Costs;
using BalanceModule.Models.Costs.Dto;
using BalanceModule.Models.CostTypes;
using BalanceModule.Models.CostTypes.Dto;

namespace BalanceModule.Core
{
    public class AutoMappingBalance : Profile
    {
        public AutoMappingBalance()
        {
            CreateMap<Balance, BalanceDto>();
            CreateMap<BalanceDto, Balance>()
                    .ForMember(x => x.PaymentMethod, opt => opt.Ignore())
                    .ForMember(x => x.Store, opt => opt.Ignore())
                    .ForMember(x => x.Employee, opt => opt.Ignore())
                    .ForMember(x => x.BalanceCategory, opt => opt.Ignore())
                    .ForMember(x => x.BalanceDate, opt => opt.Ignore());
            CreateMap<BalanceCategory, BalanceCategoryDto>();
            CreateMap<CostType, CostTypeDto>().ReverseMap();
            CreateMap<Cost, CostDto>();
            CreateMap<CostDto, Cost>()
                    .ForMember(x => x.CostDate, opt => opt.Ignore());
        }
    }
}
