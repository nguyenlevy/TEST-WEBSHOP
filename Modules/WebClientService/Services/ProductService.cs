using AutoMapper;
using Microsoft.EntityFrameworkCore;
using WebClient.Core;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebClient.Models.Dto;
using WebClient.Models;
using Core.Core;
using WebClientService.Models.Dto;
using WebClientService.Models;

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

        public async Task<List<ProductMapping>> GetByCategory(int CategoryID)
        {

            var childCategoryId = _unitOfWork.CategoryRepository.FindAll().Where(x => x.ParentCategoryId == CategoryID).Select(i => i.Id);
            var childrenCategoryId = _unitOfWork.CategoryRepository.FindAll().Where(x => childCategoryId.Contains(x.ParentCategoryId.Value)).Select(i => i.Id);

            var listCategory = childCategoryId.Concat(childrenCategoryId).ToList();
            listCategory.Add(CategoryID);
            var productsID = _unitOfWork.ProductCategoryRepository.FindAll().Where(x => listCategory.Contains(x.CategoryId.Value)).Select(i => i.ProductId).ToList();
            var queryProducts = _unitOfWork.ProductRepository.FindByCondition(x => productsID.Contains(x.Id)).ToList();
            var brandId = _unitOfWork.AttributeValue_MappingRepository.FindAll().Where(x => productsID.Contains(x.ProductId)).Select(i => i.BrandId).ToList();
            var brandTest = _unitOfWork.AttributeValue_MappingRepository.FindAll().Where(x => productsID.Contains(x.ProductId)).Select(i => new {i.BrandId,i.ProductId }).ToList();
            var brand = _unitOfWork.BrandRepository.FindAll().ToList();
            var productManufacturer = _unitOfWork.ProductManufacturerRepository.FindAll().ToList();
            var query = (from s in queryProducts
                        join m in productManufacturer on s.ProductManufacturerId equals m.Id
                        select new ProductMapping
                        {
                            Id = s.Id,
                            Name = s.Name,
                            Price = s.Price,
                            Image = s.Image,
                            Brands = (from d in brand
                                      join n in brandTest on d.Id equals n.BrandId
                                      where n.ProductId == s.Id
                                      select new Brand
                                      {
                                          Id = d.Id,
                                          Image = d.Image,
                                          Name = d.Name
                                      }).GroupBy(i=>i.Id).Select(grp=> grp.First()).ToList(),
                            ProductManufacturer = m.Name
                        }).ToList();


            return query;

        }

        public async Task<List<ProductMapping>> GetByNewProduct()
        {
            var newProduct = _unitOfWork.ProductRepository.FindAll().Where(x => x.NewProduct == true).ToList();
            var productsID = _unitOfWork.ProductRepository.FindAll().Where(x => x.NewProduct == true).Select(i=>i.Id).ToList();
            var brandTest = _unitOfWork.AttributeValue_MappingRepository.FindAll().Where(x => productsID.Contains(x.ProductId)).Select(i => new { i.BrandId, i.ProductId }).ToList();
            var brand = _unitOfWork.BrandRepository.FindAll().ToList();
            var productManufacturer = _unitOfWork.ProductManufacturerRepository.FindAll().ToList();
            var query = (from s in newProduct
                         join m in productManufacturer on s.ProductManufacturerId equals m.Id
                         select new ProductMapping
                         {
                             Id = s.Id,
                             Name = s.Name,
                             Price = s.Price,
                             Image = s.Image,
                             Brands = (from d in brand
                                       join n in brandTest on d.Id equals n.BrandId
                                       where n.ProductId == s.Id
                                       select new Brand
                                       {
                                           Id = d.Id,
                                           Image = d.Image,
                                           Name = d.Name
                                       }).GroupBy(i => i.Id).Select(grp => grp.First()).ToList(),
                             ProductManufacturer = m.Name
                         }).ToList();

            return query;
        }
        public async Task<List<ProductMapping>> GetBySaleProduct()
        {
            var saleProduct = _unitOfWork.ProductRepository.FindAll().Where(x => x.SaleProduct == true).ToList();
            var productsID = _unitOfWork.ProductRepository.FindAll().Where(x => x.SaleProduct == true).Select(i => i.Id).ToList();
            var brandTest = _unitOfWork.AttributeValue_MappingRepository.FindAll().Where(x => productsID.Contains(x.ProductId)).Select(i => new { i.BrandId, i.ProductId }).ToList();
            var brand = _unitOfWork.BrandRepository.FindAll().ToList();
            var productManufacturer = _unitOfWork.ProductManufacturerRepository.FindAll().ToList();
            var query = (from s in saleProduct
                         join m in productManufacturer on s.ProductManufacturerId equals m.Id
                         select new ProductMapping
                         {
                             Id = s.Id,
                             Name = s.Name,
                             Price = s.Price,
                             Image = s.Image,
                             Brands = (from d in brand
                                       join n in brandTest on d.Id equals n.BrandId
                                       where n.ProductId == s.Id
                                       select new Brand
                                       {
                                           Id = d.Id,
                                           Image = d.Image,
                                           Name = d.Name
                                       }).GroupBy(i => i.Id).Select(grp => grp.First()).ToList(),
                             ProductManufacturer = m.Name
                         }).ToList();
            return query;
        }
        public async Task<List<ProductMapping>> GetBySellingProduct()
        {
            var sellingProduct = _unitOfWork.ProductRepository.FindAll().Where(x => x.SellingProduct == true).ToList();
            var productsID = _unitOfWork.ProductRepository.FindAll().Where(x => x.SellingProduct == true).Select(i => i.Id).ToList();
            var brandTest = _unitOfWork.AttributeValue_MappingRepository.FindAll().Where(x => productsID.Contains(x.ProductId)).Select(i => new { i.BrandId, i.ProductId }).ToList();
            var brand = _unitOfWork.BrandRepository.FindAll().ToList();
            var productManufacturer = _unitOfWork.ProductManufacturerRepository.FindAll().ToList();
            var query = (from s in sellingProduct
                         join m in productManufacturer on s.ProductManufacturerId equals m.Id
                         select new ProductMapping
                         {
                             Id = s.Id,
                             Name = s.Name,
                             Price = s.Price,
                             Image = s.Image,
                             Brands = (from d in brand
                                       join n in brandTest on d.Id equals n.BrandId
                                       where n.ProductId == s.Id
                                       select new Brand
                                       {
                                           Id = d.Id,
                                           Image = d.Image,
                                           Name = d.Name
                                       }).GroupBy(i => i.Id).Select(grp => grp.First()).ToList(),
                             ProductManufacturer = m.Name
                         }).ToList();
            return query;
        }
        public async Task<List<ProductDto>> GetByFlashSale()
        {
            var queryProducts = _unitOfWork.ProductRepository.FindAll();
            var products = await queryProducts.ToListAsync();

            return _mapper.Map<List<ProductDto>>(products);
        }

        public async Task<List<ProductDto>> GetByNewest()
        {
            var queryProducts = _unitOfWork.ProductRepository.FindAll();
            var products = await queryProducts.ToListAsync();

            return _mapper.Map<List<ProductDto>>(products);
        }

        public async Task<List<ProductDto>> GetByBestSeller()
        {
            var queryProducts = _unitOfWork.ProductRepository.FindAll();
            var products = await queryProducts.ToListAsync();

            return _mapper.Map<List<ProductDto>>(products);
        }

        public async Task<List<ProductMapping>> GetByKeyword(string Keyword)
        {
            var queryProducts = _unitOfWork.ProductRepository.FindAll().Where(x=>x.Name.Contains(Keyword)).ToList();
            var productsID = _unitOfWork.ProductRepository.FindAll().Where(x => x.Name.Contains(Keyword)).Select(i => i.Id).ToList();
            var brandTest = _unitOfWork.AttributeValue_MappingRepository.FindAll().Where(x => productsID.Contains(x.ProductId)).Select(i => new { i.BrandId, i.ProductId }).ToList();
            var brand = _unitOfWork.BrandRepository.FindAll().ToList();
            var productManufacturer = _unitOfWork.ProductManufacturerRepository.FindAll().ToList();
            var query = (from s in queryProducts
                         join m in productManufacturer on s.ProductManufacturerId equals m.Id
                         select new ProductMapping
                         {
                             Id = s.Id,
                             Name = s.Name,
                             Price = s.Price,
                             Image = s.Image,
                             Brands = (from d in brand
                                       join n in brandTest on d.Id equals n.BrandId
                                       where n.ProductId == s.Id
                                       select new Brand
                                       {
                                           Id = d.Id,
                                           Image = d.Image,
                                           Name = d.Name
                                       }).GroupBy(i => i.Id).Select(grp => grp.First()).ToList(),
                             ProductManufacturer = m.Name
                         }).ToList();
            return query;
        }

        public async Task<List<ProductMapping>> GetByFilter(ProductSearchModel searchmodel)
        {
            var listAttribute = new List<int>();
            var listBrand = new List<int>();
            var dataCategory = _unitOfWork.CategoryRepository.FindAll().Where(x => x.Id == searchmodel.CategoryID).Select(i => i.ParentCategoryId).FirstOrDefault();
            // Nếu Category là cha
            var listCategory = new List<int>();
            if (dataCategory == null)
            {
                var listCategoryIDChild = _unitOfWork.CategoryRepository.FindAll().Where(x => x.ParentCategoryId == searchmodel.CategoryID).Select(i => i.Id);
                listCategory = listCategoryIDChild.ToList();
                if (listCategory.Any())
                {
                    var listCategoryIDChildren = _unitOfWork.CategoryRepository.FindAll().Where(x => listCategoryIDChild.Contains(x.ParentCategoryId.Value)).Select(i => i.Id);
                    listCategory = listCategoryIDChild.Concat(listCategoryIDChildren).ToList();
                    listCategory.Add(searchmodel.CategoryID);
                }
            }
            else
            {
                var listCategoryIDChild = _unitOfWork.CategoryRepository.FindAll().Where(x => x.ParentCategoryId == searchmodel.CategoryID).Select(i => i.Id).ToList();
                listCategoryIDChild.Add(searchmodel.CategoryID);
                listCategory = listCategoryIDChild;
            }

            var categoryProduct = _unitOfWork.AttributeValue_MappingRepository.FindAll().Where(x => listCategory.Contains(x.CategoryId)).Select(i=>new { i.AttributeValueId,i.BrandId,i.ProductId}).ToList();

            // lay ra dk Where theo AttributeID
            if (!string.IsNullOrEmpty(searchmodel.AttributeIDs) && searchmodel.AttributeIDs !="null")
            {
                listAttribute = searchmodel.AttributeIDs.Split(",").Where(x => !string.IsNullOrEmpty(x)).Select(int.Parse).ToList();
                categoryProduct = categoryProduct.Where(x => listAttribute.Contains(x.AttributeValueId)).ToList();
            }

            // Lay ra dk Where theo BrandID
            if (!string.IsNullOrEmpty(searchmodel.BrandIDs) && searchmodel.BrandIDs != "null")
            {
                listBrand = searchmodel.BrandIDs.Split(",").Where(x => !string.IsNullOrEmpty(x)).Select(int.Parse).ToList();
                categoryProduct = categoryProduct.Where(x => listBrand.Contains(x.BrandId)).ToList();
            }
            var queryProduct = categoryProduct.Select(i => i.ProductId).ToList();
            var products = _unitOfWork.ProductRepository.FindAll().Where(x => queryProduct.Contains(x.Id)).ToList();
            var productsID = _unitOfWork.ProductRepository.FindAll().Where(x => queryProduct.Contains(x.Id)).Select(i => i.Id).ToList();
            var brandTest = _unitOfWork.AttributeValue_MappingRepository.FindAll().Where(x => productsID.Contains(x.ProductId)).Select(i => new { i.BrandId, i.ProductId }).ToList();
            var brand = _unitOfWork.BrandRepository.FindAll().ToList();
            var productManufacturer = _unitOfWork.ProductManufacturerRepository.FindAll().ToList();
            var query = (from s in products
                         join m in productManufacturer on s.ProductManufacturerId equals m.Id
                         select new ProductMapping
                         {
                             Id = s.Id,
                             Name = s.Name,
                             Price = s.Price,
                             Image = s.Image,
                             Brands = (from d in brand
                                       join n in brandTest on d.Id equals n.BrandId
                                       where n.ProductId == s.Id
                                       select new Brand
                                       {
                                           Id = d.Id,
                                           Image = d.Image,
                                           Name = d.Name
                                       }).GroupBy(i => i.Id).Select(grp => grp.First()).ToList(),
                             ProductManufacturer = m.Name
                         }).ToList();

            return query;
        }

        public async Task<List<ProductMapping>> GetById(int id)
        {
            var product = _unitOfWork.ProductRepository.FindAll().Where(x => x.Id == id).ToList();
            var brandId = _unitOfWork.AttributeValue_MappingRepository.FindAll().Where(x => x.ProductId==id).Select(i=>i.BrandId).ToList();
            var attributeValueId = _unitOfWork.AttributeValue_MappingRepository.FindAll().Where(x => x.ProductId == id).Select(i => i.AttributeValueId).ToList();
            var brand = _unitOfWork.BrandRepository.FindAll().Where(x => brandId.Contains(x.Id));
            var productManufacturer = _unitOfWork.ProductManufacturerRepository.FindAll().ToList();
            var attributeValue = _unitOfWork.AttributeValueRepository.FindAll().Where(x => attributeValueId.Contains(x.Id)).ToList();
            var attributeId = _unitOfWork.AttributeValueRepository.FindAll().Where(x => attributeValueId.Contains(x.Id)).Select(i => i.AttributeId).Distinct().ToList();
            var attribute = _unitOfWork.AttributeRepository.FindAll().Where(x => attributeId.Contains(x.Id)).ToList();
            var query = from p in product
                        join s in productManufacturer on p.ProductManufacturerId equals s.Id
                        select new ProductMapping
                        {
                            Name = p.Name,
                            Price = p.Price,
                            Image = p.Image,
                            Brands = (from d in brand
                                      select new Brand
                                      {
                                          Id = d.Id,
                                          Image = d.Image,
                                          Name = d.Name
                                      }).ToList(),
                            ProductManufacturer = s.Name,
                            NewProduct = p.NewProduct,
                            SaleProduct = p.SaleProduct,
                            SellingProduct = p.SellingProduct,
                            Cost = p.Cost,
                            Attributes = (from t in attribute 
                                          select new AttributeList {
                                              AttributeLabel =t.Label,
                                              AttributeId = t.Id,
                                              listAttributeValue = (from v in attributeValue
                                                                    where v.AttributeId == t.Id
                                                                    select new AttributeValueData { 
                                                                        AttributeLabel =v.Label,
                                                                    }).ToList(),
                                          }).ToList(),

                        };
            var result = query.ToList();
            return result;
        }
    }
}
