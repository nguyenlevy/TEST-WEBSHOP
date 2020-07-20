using AutoMapper;
using OrderModule.Core;
using Microsoft.EntityFrameworkCore;
using OrderModule.Models.Carriers.Dto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OrderModule.Services.Carriers
{
    public class CarrierService : ICarrierService
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWorkOrder _unitOfWork;
        public CarrierService(
            IMapper mapper,
            IUnitOfWorkOrder unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }
        public async Task<List<CarrierDto>> GetAll(int? tenantId)
        {
            var carriers = await _unitOfWork.CarrierRepository
                                            .FindByCondition(s => s.TenantId == tenantId.Value)
                                            .AsNoTracking().ToListAsync();
            return _mapper.Map<List<CarrierDto>>(carriers);
        }
    }
}
