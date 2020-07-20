using Common.Models.Products;
using ProductModule.Core;
using System.Linq;

namespace ProductModule.Services.Products
{
    public class ProductManufacturerService : IProductManufacturerService
    {
        private readonly IUnitOfWorkProduct _unitOfWork;
        public ProductManufacturerService(IUnitOfWorkProduct unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public IQueryable<ProductManufacturer> GetAll(int? tenantId)
        {
            var result = _unitOfWork.ProductManufacturerRepository.FindAll();
            if (tenantId.HasValue)
            {
                result = result.Where(p => p.TenantId == tenantId.Value);
            }
            return result;
        }
    }
}
