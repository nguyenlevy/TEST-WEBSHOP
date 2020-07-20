using Common.Models.Products;
using System.Linq;

namespace ProductModule.Services.TaxCategories
{
    public interface ITaxCategoryService
    {
        IQueryable<TaxCategory> GetAll(int? tenantId);
    }
}
