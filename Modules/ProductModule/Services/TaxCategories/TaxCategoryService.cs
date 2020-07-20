using Common.Models.Products;
using ProductModule.Core;
using System.Linq;

namespace ProductModule.Services.TaxCategories
{
    public class TaxCategoryService : ITaxCategoryService
    {
        private readonly IUnitOfWorkProduct _unitOfWork;
        public TaxCategoryService(IUnitOfWorkProduct unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public IQueryable<TaxCategory> GetAll(int? tenantId)
        {
            var result = _unitOfWork.TaxCategoryRepository.FindAll();
            if (tenantId.HasValue)
            {
                result = result.Where(p => p.TenantId == tenantId.Value);
            }
            return result;
        }
    }
}
