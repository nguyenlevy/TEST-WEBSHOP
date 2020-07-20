using OverviewModule.Models.Dto;
using System.Threading.Tasks;

namespace OverviewModule.Services.Overviews
{
    public interface IOverviewService
    {
        Task<OverviewDto> GetOverview(int? tenantId);
    }
}
