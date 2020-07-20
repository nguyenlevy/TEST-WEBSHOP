using Common.Models.Products;
using System.Linq;

namespace ProductModule.Services.Products
{
    public interface IProductStatusService
    {
        IQueryable<ProductStatus> GetAll(int? tenantId);
    }
}
