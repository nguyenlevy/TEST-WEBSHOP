using OrderModule.Models.Carriers.Dto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OrderModule.Services.Carriers
{
    public interface ICarrierService
    {
        Task<List<CarrierDto>> GetAll(int? tenantId);
    }
}
