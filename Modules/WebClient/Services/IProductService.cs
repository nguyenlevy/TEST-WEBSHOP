using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebClient.Models;
using WebClient.Models.Dto;

namespace WebClient.Services
{
    public interface IProductService
    {
        IQueryable<Product> GetById(int id);
        Task<List<ProductDto>> GetByCategory(int CategoryID);
    }
}
