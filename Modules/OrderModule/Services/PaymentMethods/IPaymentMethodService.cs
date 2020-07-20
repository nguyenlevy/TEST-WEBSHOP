using OrderModule.Models.PaymentMethods.Dto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OrderModule.Services.PaymentMethods
{
    public interface IPaymentMethodService
    {
        Task<List<PaymentMethodDto>> GetAll(int? tenantId);
    }
}
