using Common.Models.Products;
using ProductModule.Core;
using System.Linq;

namespace ProductModule.Services.Products
{
    public class ProductTypeService : IProductTypeService
    {
        private readonly IUnitOfWorkProduct _unitOfWork;
        public ProductTypeService(IUnitOfWorkProduct unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public IQueryable<ProductType> GetAll(int? tenantId)
        {
            var result = _unitOfWork.ProductTypeRepository.FindAll();
            if (tenantId.HasValue)
            {
                result = result.Where(p => p.TenantId == tenantId.Value);
            }
            return result;
        }
    }
}
