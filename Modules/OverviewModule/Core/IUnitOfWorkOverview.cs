using System.Threading.Tasks;

namespace OverviewModule.Core
{
    public interface IUnitOfWorkOverview
    {
        Task Commit();
    }
}
