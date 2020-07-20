using AutoMapper;
using Microsoft.EntityFrameworkCore;
using WebClient.Core;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebClient.Models.Dto;
using WebClient.Models;

namespace WebClient.Services
{
    public class ProductService : IProductService
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWorkWebClient _unitOfWork;
        public ProductService(
            IMapper mapper,
            IUnitOfWorkWebClient unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        public async Task<List<ProductDto>> GetByCategory(int CategoryID)
        {
            var productsID = _unitOfWork.ProductCategoryRepository.FindAll().Where(x => x.Id == CategoryID).Select(x => x.Id).ToList();
            var queryProducts = _unitOfWork.ProductRepository.FindByCondition(x => productsID.Contains(x.Id));

            var products = await queryProducts.ToListAsync();
            return _mapper.Map<List<ProductDto>>(products);

        }

        public IQueryable<Product> GetById(int id)
        {
            return _unitOfWork.ProductRepository.FindByCondition(p => p.Id == id);
        }
    }
}
