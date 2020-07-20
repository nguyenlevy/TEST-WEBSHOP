using Core.Core;
using CustomerModule.Models.Customers;
using CustomerModule.Models.Customers.Dto;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerModule.Services.Suppliers
{
    public interface ISupplierService
    {
        Task<List<SupplierDto>> GetByFilter(SupplierFilter supplierFilter);
        Task<ApiJsonResult> Create(int? tenantId, SupplierDto data);
        Task<ApiJsonResult> Update(int? tenantId, SupplierDto data);
        Task<ApiJsonResult> Delete(int id);
        Task<bool> ValidateDuplicateCode(int? id, string code);
        IQueryable<Customer> GetById(int id);
    }
}
