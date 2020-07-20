using AutoMapper;
using BalanceModule.Core;
using BalanceModule.Models.Costs;
using BalanceModule.Models.Costs.Dto;
using BalanceModule.Models.CostTypes.Dto;
using Core.Core.Helper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BalanceModule.Services.Costs
{
    public class CostService : ICostService
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWorkBalance _unitOfWork;
        public CostService(
            IMapper mapper,
            IUnitOfWorkBalance unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        public async Task CreateCost(int? tenantId, long userId, CostDto data)
        {
            var cost = _mapper.Map<Cost>(data);
            if (!string.IsNullOrEmpty(data.CostDate))
            {
                cost.CostDate = Convert.ToDateTime(data.CostDate);
            }
            cost.Code = Constants.GenerateCode();
            cost.CreatedDate = DateTime.Now;
            cost.UserModifiedId = userId;
            cost.TenantId = tenantId.Value;
            _unitOfWork.CostRepository.Create(cost);
            await _unitOfWork.Commit();
        }

        public async Task<List<CostTypeDto>> GetCostTypes(int? tenantId)
        {
            var query = _unitOfWork.CostTypeRepository.FindByCondition(c => c.TenantId == tenantId.Value);
            var data = await query.AsNoTracking().ToListAsync();

            return _mapper.Map<List<CostTypeDto>>(data);
        }
    }
}
