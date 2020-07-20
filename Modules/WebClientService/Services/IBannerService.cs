using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebClient.Models;
using WebClient.Models.Dto;

namespace WebClientService.Services
{
    public interface IBannerService
    {
        public IQueryable<Banner> GetById(int id);
        public Task<List<Banner>> GetAll();
        
    }
}
