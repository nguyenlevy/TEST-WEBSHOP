using OrderModule.Models.Stores.Dto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OrderModule.Services.Stores
{
    public interface IStoreService
    {
        Task<List<StoreDto>> GetAll(int? tenantId);
    }
}
