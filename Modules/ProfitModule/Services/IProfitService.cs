using Core.Core;
using ProfitModule.Models.Profits;
using System.Threading.Tasks;

namespace ProfitModule.Services
{
    public interface IProfitService
    {
        Task<ApiJsonResult> GetByFilter(ProfitFilter turnoverFilter);
    }
}
