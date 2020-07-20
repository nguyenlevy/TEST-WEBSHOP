using AutoMapper;
using Core.Core;
using CustomerModule.Core;
using CustomerModule.Models.Customers;
using CustomerModule.Models.Customers.Dto;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerModule.Services.Suppliers
{
    public class SupplierService : ISupplierService
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWorkCustomer _unitOfWork;
        public SupplierService(
            IMapper mapper,
            IUnitOfWorkCustomer unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }
        public async Task<ApiJsonResult> Create(int? tenantId, SupplierDto data)
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
            var supplier = _mapper.Map<Customer>(data);
            supplier.TenantId = tenantId.Value;
            supplier.CustomerTypeId = CustomerType.Supplier;
            _unitOfWork.CustomerRepository.Create(supplier);
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

        public async Task<List<SupplierDto>> GetByFilter(SupplierFilter supplierFilter)
        {
            var querySuppliers = _unitOfWork.CustomerRepository.FindByCondition(c => c.CustomerTypeId == CustomerType.Supplier)
                                                .AsNoTracking();
            if (supplierFilter.TenantId.HasValue)
            {
                querySuppliers = querySuppliers.Where(p => p.TenantId == supplierFilter.TenantId.Value);
            }
            if (supplierFilter.CustomerId.HasValue)
            {
                querySuppliers = querySuppliers.Where(p => p.Id == supplierFilter.CustomerId.Value);
            }
            if (!string.IsNullOrEmpty(supplierFilter.CustomerCode))
            {
                querySuppliers = querySuppliers.Where(p => p.CustomerCode.ToLower() == supplierFilter.CustomerCode.ToLower());
            }
            var suppliers = await querySuppliers.ToListAsync();
            return _mapper.Map<List<SupplierDto>>(suppliers);
        }

        public IQueryable<Customer> GetById(int id)
        {
            return _unitOfWork.CustomerRepository.FindByCondition(p => p.Id == id);
        }

        public async Task<ApiJsonResult> Update(int? tenantId, SupplierDto data)
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

            var supplier = _mapper.Map<Customer>(data);
            supplier.TenantId = tenantId.Value;
            supplier.CustomerTypeId = CustomerType.Supplier;
            _unitOfWork.CustomerRepository.Update(supplier);
            await _unitOfWork.Commit();
            return result;
        }

        public async Task<bool> ValidateDuplicateCode(int? id, string code)
        {
            var query = _unitOfWork.CustomerRepository.FindByCondition(p => p.CustomerCode.ToLower() == code.ToLower() && p.CustomerTypeId == CustomerType.Supplier);
            if (id.HasValue)
            {
                query = query.Where(p => p.Id != id.Value);
            }
            return (await query.FirstOrDefaultAsync()) != null;
        }
    }
}
