using OrderModule.Models.Employees.Dto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OrderModule.Services.Employees
{
    public interface IEmployeeService
    {
        Task<List<EmployeeDto>> GetAll(int? tenantId);
    }
}
