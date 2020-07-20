using Common.Models.Products;
using Common.Models.Products.Dto;
using Core.Core;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductModule.Services.Products
{
    public interface IProductService
    {
        Task<List<ProductDto>> GetByFilter(ProductFilter productFilter);
        Task<ApiJsonResult> Create(int? tenantId, ProductDto productData);
        Task<ApiJsonResult> Update(int? tenantId, ProductDto productData);
        Task<ApiJsonResult> Delete(int id);
        Task<bool> ValidateDuplicateName(int? id, string name);
        IQueryable<Product> GetById(int id);
    }
}
