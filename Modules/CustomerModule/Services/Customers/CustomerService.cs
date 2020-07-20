using AutoMapper;
using Core.Core;
using CustomerModule.Core;
using CustomerModule.Models.Customers;
using CustomerModule.Models.Customers.Dto;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerModule.Services.Customers
{
    public class CustomerService : ICustomerService
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWorkCustomer _unitOfWork;
        public CustomerService(
            IMapper mapper,
            IUnitOfWorkCustomer unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }
        public async Task<ApiJsonResult> Create(int? tenantId, CustomerDto data)
        {
            var result = new ApiJsonResult();
            if (string.IsNullOrEmpty(data.Name))
            {
                result.Code = CodeModel.Fail;
                result.Message = "Name is not null";
                return result;
            }
            if (string.IsNullOrEmpty(data.CustomerCode))
            {
                result.Code = CodeModel.Fail;
                result.Message = "Customer Code is not null";
                return result;
            }
            if (await ValidateDuplicateCode(data.Id, data.CustomerCode))
            {
                result.Code = CodeModel.Fail;
                result.Message = "Customer Code is duplicated";
                return result;
            }
            var customer = _mapper.Map<Customer>(data);
            customer.TenantId = tenantId.Value;
            customer.CustomerTypeId = CustomerType.Customer;
            _unitOfWork.CustomerRepository.Create(customer);
            await _unitOfWork.Commit();
            return result;
        }

        public async Task<ApiJsonResult> Delete(int id)
        {
            var result = new ApiJsonResult();
            var customer = await GetById(id).AsNoTracking().FirstOrDefaultAsync();
            if (customer == null)
            {
                result.Code = CodeModel.Fail;
                result.Message = "Customer is not found";
                return result;
            }
            _unitOfWork.CustomerRepository.Delete(customer);
            await _unitOfWork.Commit();
            return result;
        }

        public async Task<List<CustomerDto>> GetByFilter(CustomerFilter customerFilter)
        {
            var queryCustomers = _unitOfWork.CustomerRepository.FindByCondition(c => c.CustomerTypeId == CustomerType.Customer).AsNoTracking();
            //var queryCustomers = _unitOfWork.CustomerRepository.FindAll().AsNoTracking();
            if (customerFilter.TenantId.HasValue)
            {
                queryCustomers = queryCustomers.Where(p => p.TenantId == customerFilter.TenantId.Value);
            }
            if (customerFilter.CustomerId.HasValue)
            {
                queryCustomers = queryCustomers.Where(p => p.Id == customerFilter.CustomerId.Value);
            }
            if (!string.IsNullOrEmpty(customerFilter.CustomerCode))
            {
                queryCustomers = queryCustomers.Where(p => p.CustomerCode.ToLower() == customerFilter.CustomerCode.ToLower());
            }
            var customers = await queryCustomers.ToListAsync();
            return _mapper.Map<List<CustomerDto>>(customers);
        }

        public IQueryable<Customer> GetById(int id)
        {
            return _unitOfWork.CustomerRepository.FindByCondition(p => p.Id == id);
        }

        public async Task<ApiJsonResult> Update(int? tenantId, CustomerDto data)
        {
            var result = new ApiJsonResult();
            if (string.IsNullOrEmpty(data.Name))
            {
                result.Code = CodeModel.Fail;
                result.Message = "Name is not null";
                return result;
            }
            if (string.IsNullOrEmpty(data.CustomerCode))
            {
                result.Code = CodeModel.Fail;
                result.Message = "Customer Code is not null";
                return result;
            }
            var checkCustomer = await GetById(data.Id).AsNoTracking().FirstOrDefaultAsync();
            if (checkCustomer == null)
            {
                result.Code = CodeModel.Fail;
                result.Message = "Customer is not found";
                return result;
            }
            if (await ValidateDuplicateCode(data.Id, data.CustomerCode))
            {
                result.Code = CodeModel.Fail;
                result.Message = "Customer code is duplicated";
                return result;
            }

            var customer = _mapper.Map<Customer>(data);
            customer.TenantId = tenantId.Value;
            customer.CustomerTypeId = CustomerType.Customer;
            _unitOfWork.CustomerRepository.Update(customer);
            await _unitOfWork.Commit();
            return result;
        }

        public async Task<bool> ValidateDuplicateCode(int? id, string code)
        {
            var query = _unitOfWork.CustomerRepository.FindByCondition(p => p.CustomerCode.ToLower() == code.ToLower() && p.CustomerTypeId == CustomerType.Customer);
            if (id.HasValue)
            {
                query = query.Where(p => p.Id != id.Value);
            }
            return (await query.FirstOrDefaultAsync()) != null;
        }
    }
}
