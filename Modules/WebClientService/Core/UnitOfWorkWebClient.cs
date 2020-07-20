using System;
using System.Threading.Tasks;
using WebClient.Models;
using WebClientService.Models;

namespace WebClient.Core
{
    public class UnitOfWorkWebClient : IUnitOfWorkWebClient, IDisposable
    {
        protected WebClientDbContext context = new WebClientDbContext();

        public GenericRepository<Product> ProductRepository => new GenericRepository<Product>(context);
        public GenericRepository<ProductCategory> ProductCategoryRepository => new GenericRepository<ProductCategory>(context);
        public GenericRepository<Category> CategoryRepository => new GenericRepository<Category>(context);
        public GenericRepository<Policy> PolicyRepository => new GenericRepository<Policy>(context);
        public GenericRepository<Blog> BlogRepository => new GenericRepository<Blog>(context);
        public GenericRepository<Banner> BannerRepository => new GenericRepository<Banner>(context);

        public GenericRepository<WebClientService.Models.Attribute> AttributeRepository => new GenericRepository<WebClientService.Models.Attribute>(context);

        public GenericRepository<AttributeValue> AttributeValueRepository => new GenericRepository<AttributeValue>(context);

        public GenericRepository<AttributeValue_Mapping> AttributeValue_MappingRepository => new GenericRepository<AttributeValue_Mapping>(context);

        public GenericRepository<Customer> CustomerRepository => new GenericRepository<Customer>(context);
        public GenericRepository<Brand> BrandRepository => new GenericRepository<Brand>(context);
        public GenericRepository<BlogCategory> BlogCategoryRepository => new GenericRepository<BlogCategory>(context);
        public GenericRepository<ProductManufacturer> ProductManufacturerRepository => new GenericRepository<ProductManufacturer>(context);

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
