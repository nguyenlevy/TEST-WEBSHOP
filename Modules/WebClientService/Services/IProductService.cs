using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebClient.Models;
using WebClient.Models.Dto;
using WebClientService.Models.Dto;

namespace WebClient.Services
{
    public interface IProductService
    {
        Task<List<ProductMapping>> GetById(int id);
        Task<List<ProductMapping>> GetByCategory(int CategoryID);
        Task<List<ProductDto>> GetByFlashSale();
        Task<List<ProductDto>> GetByNewest();
        Task<List<ProductDto>> GetByBestSeller();
        Task<List<ProductMapping>> GetByKeyword(string Keyword);
        Task<List<ProductMapping>> GetByFilter(ProductSearchModel searchmodel);
        Task<List<ProductMapping>> GetByNewProduct();
        Task<List<ProductMapping>> GetBySaleProduct();
        Task<List<ProductMapping>> GetBySellingProduct();

    }
}
