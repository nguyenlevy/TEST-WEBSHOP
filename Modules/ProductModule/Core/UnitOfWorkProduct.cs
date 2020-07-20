using Common.Models.Categories;
using Common.Models.Products;
using ProductModule.Models.Inventories;
using System;
using System.Threading.Tasks;

namespace ProductModule.Core
{
    public class UnitOfWorkProduct : IUnitOfWorkProduct, IDisposable
    {
        protected ProductDbContext context = new ProductDbContext();

        public GenericRepository<Product> ProductRepository => new GenericRepository<Product>(context);

        public GenericRepository<ProductCategory> ProductCategoryRepository => new GenericRepository<ProductCategory>(context);

        public GenericRepository<ProductManufacturer> ProductManufacturerRepository => new GenericRepository<ProductManufacturer>(context);

        public GenericRepository<ProductStatus> ProductStatusRepository => new GenericRepository<ProductStatus>(context);

        public GenericRepository<ProductType> ProductTypeRepository => new GenericRepository<ProductType>(context);

        public GenericRepository<TaxCategory> TaxCategoryRepository => new GenericRepository<TaxCategory>(context);

        public GenericRepository<Category> CategoryRepository => new GenericRepository<Category>(context);
        public GenericRepository<Inventory> InventoryRepository => new GenericRepository<Inventory>(context);

        public async Task Commit()
        {
            await context.SaveChangesAsync();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
