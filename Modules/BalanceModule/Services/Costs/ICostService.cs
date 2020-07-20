using BalanceModule.Models.Costs.Dto;
using BalanceModule.Models.CostTypes.Dto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BalanceModule.Services.Costs
{
    public interface ICostService
    {
        Task<List<CostTypeDto>> GetCostTypes(int? tenantId);
        Task CreateCost(int? tenantId, long userId, CostDto data);
    }
}
