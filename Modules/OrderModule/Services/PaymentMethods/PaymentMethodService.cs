using AutoMapper;
using OrderModule.Core;
using Microsoft.EntityFrameworkCore;
using OrderModule.Models.PaymentMethods.Dto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OrderModule.Services.PaymentMethods
{
    public class PaymentMethodService : IPaymentMethodService
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWorkOrder _unitOfWork;
        public PaymentMethodService(
            IMapper mapper,
            IUnitOfWorkOrder unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }
        public async Task<List<PaymentMethodDto>> GetAll(int? tenantId)
        {
            var paymentMethods = await _unitOfWork.PaymentMethodRepository
                                            .FindByCondition(s => s.TenantId == tenantId.Value)
                                            .AsNoTracking().ToListAsync();
            return _mapper.Map<List<PaymentMethodDto>>(paymentMethods);
        }
    }
}
