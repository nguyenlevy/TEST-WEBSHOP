using Common.Models.Categories;
using Common.Modes.Menu;
using System.Threading.Tasks;

namespace Authentication.Core
{
    public interface IUnitOfWorkCommon
    {
        Task Commit();
        GenericRepository<Menu> MenuRepository { get; }
        GenericRepository<Category> CategoryRepository { get; }
    }
}
