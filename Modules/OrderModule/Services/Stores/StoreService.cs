using AutoMapper;
using Microsoft.EntityFrameworkCore;
using OrderModule.Core;
using OrderModule.Models.Stores.Dto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OrderModule.Services.Stores
{
    public class StoreService : IStoreService
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWorkOrder _unitOfWork;
        public StoreService(
            IMapper mapper,
            IUnitOfWorkOrder unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        public async Task<List<StoreDto>> GetAll(int? tenantId)
        {
            var stores = await _unitOfWork.StoreRepository
                                           .FindByCondition(s => s.TenantId == tenantId.Value)
                                           .AsNoTracking().ToListAsync();
            return _mapper.Map<List<StoreDto>>(stores);
        }
    }
}
