using AutoMapper;
using OrderModule.Core;
using Microsoft.EntityFrameworkCore;
using OrderModule.Models.Employees.Dto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OrderModule.Services.Employees
{
    public class EmployeeService : IEmployeeService
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWorkOrder _unitOfWork;
        public EmployeeService(
            IMapper mapper,
            IUnitOfWorkOrder unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }
        public async Task<List<EmployeeDto>> GetAll(int? tenantId)
        {
            var employees = await _unitOfWork.EmployeeRepository
                                             .FindByCondition(s => s.TenantId == tenantId.Value)
                                             .AsNoTracking().ToListAsync();
            return _mapper.Map<List<EmployeeDto>>(employees);
        }
    }
}
