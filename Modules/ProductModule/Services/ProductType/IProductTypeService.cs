using Common.Models.Products;
using System.Linq;

namespace ProductModule.Services.Products
{
    public interface IProductTypeService
    {
        IQueryable<ProductType> GetAll(int? tenantId);
    }
}
