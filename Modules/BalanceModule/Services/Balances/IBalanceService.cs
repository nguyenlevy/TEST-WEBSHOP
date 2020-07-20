using BalanceModule.Models.Balances;
using BalanceModule.Models.Balances.Dto;
using Core.Core;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BalanceModule.Services.Balances
{
    public interface IBalanceService
    {
        Task<OverviewDto> GetOverviews();
        Task<List<BalanceDto>> GetBalances(BalanceFilter balanceFilter);
        Task CreateBalance(int? tenantId, long userId, BalanceDto data);
        Task<List<BalanceCategoryDto>> GetBalanceCategories(int? tenantId, BalanceType? balanceType);
        Task<ApiJsonResult> Delete(int id);
    }
}
