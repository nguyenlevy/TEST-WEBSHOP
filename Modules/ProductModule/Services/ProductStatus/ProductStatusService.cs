using Common.Models.Products;
using ProductModule.Core;
using System.Linq;

namespace ProductModule.Services.Products
{
    public class ProductStatusService : IProductStatusService
    {
        private readonly IUnitOfWorkProduct _unitOfWork;
        public ProductStatusService(IUnitOfWorkProduct unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public IQueryable<ProductStatus> GetAll(int? tenantId)
        {
            var result = _unitOfWork.ProductStatusRepository.FindAll();
            if (tenantId.HasValue)
            {
                result = result.Where(p => p.TenantId == tenantId.Value);
            }
            return result;
        }
    }
}
