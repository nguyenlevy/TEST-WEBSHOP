using Core.Core;
using CustomerModule.Models.Customers;
using CustomerModule.Models.Customers.Dto;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerModule.Services.Customers
{
    public interface ICustomerService
    {
        Task<List<CustomerDto>> GetByFilter(CustomerFilter customerFilter);
        Task<ApiJsonResult> Create(int? tenantId, CustomerDto data);
        Task<ApiJsonResult> Update(int? tenantId, CustomerDto data);
        Task<ApiJsonResult> Delete(int id);
        Task<bool> ValidateDuplicateCode(int? id, string code);
        IQueryable<Customer> GetById(int id);
    }
}
