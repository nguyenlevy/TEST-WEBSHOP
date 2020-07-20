using Common.Models.Categories;
using Common.Models.Products;
using ProductModule.Models.Inventories;
using System.Threading.Tasks;

namespace ProductModule.Core
{
    public interface IUnitOfWorkProduct
    {
        Task Commit();

        GenericRepository<Product> ProductRepository { get; }
        GenericRepository<ProductCategory> ProductCategoryRepository { get; }
        GenericRepository<ProductManufacturer> ProductManufacturerRepository { get; }
        GenericRepository<ProductStatus> ProductStatusRepository { get; }
        GenericRepository<ProductType> ProductTypeRepository { get; }
        GenericRepository<TaxCategory> TaxCategoryRepository { get; }
        GenericRepository<Category> CategoryRepository { get; }
        GenericRepository<Inventory> InventoryRepository { get; }
    }
}
