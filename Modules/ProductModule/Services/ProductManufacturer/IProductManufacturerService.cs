using Common.Models.Products;
using System.Linq;

namespace ProductModule.Services.Products
{
    public interface IProductManufacturerService
    {
        IQueryable<ProductManufacturer> GetAll(int? tenantId);
    }
}
