using System.Threading.Tasks;
using WebClient.Models;

namespace WebClient.Core
{
    public interface IUnitOfWorkWebClient
    {
        Task Commit();

        GenericRepository<Product> ProductRepository { get; }
        GenericRepository<ProductCategory> ProductCategoryRepository { get; }
        GenericRepository<Category> CategoryRepository { get; }
    }
}
