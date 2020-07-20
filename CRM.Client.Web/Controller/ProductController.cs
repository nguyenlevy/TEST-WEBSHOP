//using Core.Core;
//using Core.Core.Helper;
using Core.Core;
using Core.Core.Helper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
//using ProductModule.Services.Products;
//using ProductModule.Services.Products;


using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebClient.Models.Dto;
using WebClient.Services;
//using WebClient.;

namespace CRM.Controllers.WebClient
{
    [Route("api/products")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;
        private readonly LogService _logService;
        public ProductController(
            IProductService productService,
            LogService logService)
        {
            _productService = productService;
            _logService = logService;
        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery] ProductSearchModel searchmodel)
        {
            const string loggerHeader = "GetProducts -";
            _logService.Info($"{loggerHeader} Start");
            var result = new ApiJsonResult();
            try
            {
                if (searchmodel.TypeSearch == (int)TypeSearchProduct.ById)
                {
                    result.Data = await _productService.GetById(searchmodel.ProductID);
                }
                else if (searchmodel.TypeSearch == (int)TypeSearchProduct.ByCategory)
                {
                    result.Data = await _productService.GetByCategory(searchmodel.CategoryID);
                }
                else if (searchmodel.TypeSearch == (int)TypeSearchProduct.ByFlashSale)
                {
                    result.Data = await _productService.GetByFlashSale();
                }
                else if (searchmodel.TypeSearch == (int)TypeSearchProduct.ByNewest)
                {
                    result.Data = await _productService.GetByNewest();
                }
                else if (searchmodel.TypeSearch == (int)TypeSearchProduct.ByBestSeller)
                {
                    result.Data = await _productService.GetByBestSeller();
                }
                else if (searchmodel.TypeSearch == (int)TypeSearchProduct.ByKeyword)
                {
                    result.Data = await _productService.GetByKeyword(searchmodel.Keyword);
                }
                else if (searchmodel.TypeSearch == (int)TypeSearchProduct.ByFilter)
                {
                    if (searchmodel.CategoryID != 0 && searchmodel.CategoryID != null)
                    {
                        result.Data = await _productService.GetByFilter(searchmodel);
                    }
                    else
                    {
                        result.Code = CodeModel.Fail;
                        result.Message = "Bạn phải chọn Category";

                    }

                }
                else if(searchmodel.TypeSearch == (int)TypeSearchProduct.ByNewProduct)
                {
                    result.Data = await _productService.GetByNewProduct();
                }
                else if (searchmodel.TypeSearch == (int)TypeSearchProduct.BySaleProduct)
                {
                    result.Data = await _productService.GetBySaleProduct();
                }
                else if (searchmodel.TypeSearch == (int)TypeSearchProduct.BySellingProduct)
                {
                    result.Data = await _productService.GetBySellingProduct();
                }
            }
            catch (Exception ex)
            {
                _logService.Error($"{loggerHeader} Throw error {ex.Message}");
                result.Code = CodeModel.Fail;
                result.Message = ex.Message;
            }

            return Ok(result);
        }
    }
}