using Core.Core;
using System.Threading.Tasks;
using TurnoverModule.Models.Turnovers;

namespace TurnoverModule.Services
{
    public interface ITurnoverService
    {
        Task<ApiJsonResult> GetByFilter(TurnoverFilter turnoverFilter);
    }
}
