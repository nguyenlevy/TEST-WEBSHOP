using AutoMapper;
using Common.Models.Products;
using Common.Models.Products.Dto;
using Core.Core;
using Core.Core.Helper;
using Microsoft.EntityFrameworkCore;
using ProductModule.Core;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductModule.Services.Products
{
    public class ProductService : IProductService
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWorkProduct _unitOfWork;
        public ProductService(
            IMapper mapper,
            IUnitOfWorkProduct unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        public async Task<ApiJsonResult> Create(int? tenantId, ProductDto productData)
        {
            var result = new ApiJsonResult();
            if (string.IsNullOrEmpty(productData.Name))
            {
                result.Code = CodeModel.Fail;
                result.Message = "Name is null";
                return result;
            }
            if (await ValidateDuplicateName(productData.Id, productData.Name))
            {
                result.Code = CodeModel.Fail;
                result.Message = "Product name is duplicated";
                return result;
            }
            var product = _mapper.Map<Product>(productData);
            product.TenantId = tenantId.Value;
            if (string.IsNullOrEmpty(product.ProductCode))
            {
                product.ProductCode = Constants.GenerateCode();
            }
            _unitOfWork.ProductRepository.Create(product);
            await _unitOfWork.Commit();
            return result;
        }

        public async Task<ApiJsonResult> Delete(int id)
        {
            var result = new ApiJsonResult();
            var product = await GetById(id).AsNoTracking().FirstOrDefaultAsync();
            if (product == null)
            {
                result.Code = CodeModel.Fail;
                result.Message = "Product is not found";
                return result;
            }
            await DeleteProductCategories(product.Id);
            _unitOfWork.ProductRepository.Delete(product);
            await _unitOfWork.Commit();
            return result;
        }

        public async Task<List<ProductDto>> GetByFilter(ProductFilter productFilter)
        {
            var queryProducts = _unitOfWork.ProductRepository.FindAll()
                                                .Include(p => p.ProductType)
                                                .Include(p => p.ProductManufacturer)
                                                .Include(p => p.TaxCategory)
                                                .Include(p => p.ProductCategories)
                                                    .ThenInclude(pc => pc.Category)
                                                .Include(p => p.ProductStatus)
                                                .AsNoTracking();
            if (productFilter.TenantId.HasValue)
            {
                queryProducts = queryProducts.Where(p => p.TenantId == productFilter.TenantId.Value);
            }
            if (productFilter.ProductId.HasValue)
            {
                queryProducts = queryProducts.Where(p => p.Id == productFilter.ProductId.Value);
            }
            if (!string.IsNullOrEmpty(productFilter.Name))
            {
                queryProducts = queryProducts.Where(p => p.Name.ToLower() == productFilter.Name.ToLower());
            }

            var products = await queryProducts.ToListAsync();
            var productDtos = new List<ProductDto>();
            var inventories = await _unitOfWork.InventoryRepository
                                                    .FindByCondition(i => products.Select(p => p.Id).Contains(i.ProductId))
                                                    .AsNoTracking()
                                                    .ToListAsync();
            foreach (var product in products)
            {
                var productDto = _mapper.Map<ProductDto>(product);
                var inventorysFound = inventories.Where(i => i.ProductId == productDto.Id);
                productDto.Amount = 0;
                if (inventorysFound.Any())
                {
                    productDto.Amount = inventorysFound
                                                .OrderByDescending(t => t.CreatedDate)
                                                .First().Amount;
                }
                productDto.ProductCategoryName = product.ProductCategories.FirstOrDefault()?.Category.Name;
                productDto.ProductCategoryId = product.ProductCategories.FirstOrDefault()?.Category.Id;
                productDto.ProductManufacturerName = product.ProductManufacturer?.Name;
                productDto.ProductStatusName = product.ProductStatus?.Name;
                productDtos.Add(productDto);
            }
            return productDtos;
        }

        public IQueryable<Product> GetById(int id)
        {
            return _unitOfWork.ProductRepository.FindByCondition(p => p.Id == id);
        }

        public async Task<ApiJsonResult> Update(int? tenantId, ProductDto productData)
        {
            var result = new ApiJsonResult();
            if (string.IsNullOrEmpty(productData.Name))
            {
                result.Code = CodeModel.Fail;
                result.Message = "Name is not null";
                return result;
            }
            var checkProduct = await GetById(productData.Id).AsNoTracking().FirstOrDefaultAsync();
            if (checkProduct == null)
            {
                result.Code = CodeModel.Fail;
                result.Message = "Product is not found";
                return result;
            }
            if (await ValidateDuplicateName(productData.Id, productData.Name))
            {
                result.Code = CodeModel.Fail;
                result.Message = "Product name is duplicated";
                return result;
            }

            var product = _mapper.Map<Product>(productData);
            product.TenantId = tenantId.Value;
            if (string.IsNullOrEmpty(product.ProductCode))
            {
                product.ProductCode = Constants.GenerateCode();
            }
            await DeleteProductCategories(product.Id);
            _unitOfWork.ProductRepository.Update(product);
            await _unitOfWork.Commit();
            return result;
        }

        public async Task<bool> ValidateDuplicateName(int? id, string name)
        {
            var query = _unitOfWork.ProductRepository.FindByCondition(p => p.Name.ToLower() == name.ToLower());
            if (id.HasValue)
            {
                query = query.Where(p => p.Id != id.Value);
            }
            return (await query.FirstOrDefaultAsync()) != null;
        }

        private async Task DeleteProductCategories(int? productId)
        {
            if (productId.HasValue)
            {
                var productCategories = _unitOfWork.ProductCategoryRepository.FindByCondition(pc => pc.ProductId == productId.Value);
                _unitOfWork.ProductCategoryRepository.RemoveRange(productCategories);
                await _unitOfWork.Commit();
            }
        }
    }
}
