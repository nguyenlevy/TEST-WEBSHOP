using System.Threading.Tasks;
using WebClient.Models;
using WebClientService.Models;

namespace WebClient.Core
{
    public interface IUnitOfWorkWebClient
    {
        Task Commit();

        GenericRepository<Product> ProductRepository { get; }
        GenericRepository<ProductCategory> ProductCategoryRepository { get; }
        GenericRepository<Category> CategoryRepository { get; }
        GenericRepository<Policy> PolicyRepository { get; }
        GenericRepository<Blog> BlogRepository { get; }
        GenericRepository<Banner> BannerRepository { get; }
        GenericRepository<Attribute> AttributeRepository { get; }
        GenericRepository<AttributeValue> AttributeValueRepository { get; }
        GenericRepository<AttributeValue_Mapping> AttributeValue_MappingRepository { get; }
        GenericRepository<Customer> CustomerRepository { get; }
        GenericRepository<Brand> BrandRepository { get; }
        GenericRepository<BlogCategory> BlogCategoryRepository { get; }
        GenericRepository<ProductManufacturer> ProductManufacturerRepository { get; }


    }
}
