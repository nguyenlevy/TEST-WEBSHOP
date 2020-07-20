using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebClient.Models;
using WebClient.Models.Dto;

namespace WebClientService.Services
{
    public interface IPolicyService
    {
        IQueryable<Policy> GetById(int id);
        Task<List<Policy>> GetAll();
    }
}
