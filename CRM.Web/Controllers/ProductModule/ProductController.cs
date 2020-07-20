using Authentication.Services.Users;
using Common.Models.Products.Dto;
using Core.Core;
using Core.Core.Helper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProductModule.Services.Products;
using ProductModule.Services.TaxCategories;
using System;
using System.Threading.Tasks;

namespace Sales.Controllers.ProductModule
{
    [Authorize]
    [Route("api/products")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductTypeService _productTypeService;
        private readonly IProductManufacturerService _productManufacturerService;
        private readonly ITaxCategoryService _taxCategoryService;
        private readonly IProductService _productService;
        private readonly IUserService _userService;
        private readonly IProductStatusService _productStatusService;
        private readonly LogService _logService;
        public ProductController(
            IProductTypeService productTypeService,
            IProductManufacturerService productManufacturerService,
            ITaxCategoryService taxCategoryService,
            IProductService productService,
            IUserService userService,
            IProductStatusService productStatusService,
            LogService logService)
        {
            _productTypeService = productTypeService;
            _productManufacturerService = productManufacturerService;
            _taxCategoryService = taxCategoryService;
            _productService = productService;
            _userService = userService;
            _logService = logService;
            _productStatusService = productStatusService;
        }

        [HttpGet]
        public async Task<IActionResult> GetProducts([FromQuery] int? productId, [FromQuery] string name)
        {
            const string loggerHeader = "GetProducts -";
            _logService.Info($"{loggerHeader} Start");
            var result = new ApiJsonResult();
            try
            {
                var userLogin = await _userService.GetCurrentUserLogin(HttpContext);
                _logService.Info($"{loggerHeader} Get products with tenantId {userLogin?.TenantId}, productId {productId}, name {name}");
                var productFilter = new ProductFilter
                {
                    TenantId = userLogin.TenantId,
                    ProductId = productId,
                    Name = name
                };
                result.Data = await _productService.GetByFilter(productFilter);
            }
            catch (Exception ex)
            {
                _logService.Error($"{loggerHeader} Throw error {ex.Message}");
                result.Code = CodeModel.Fail;
                result.Message = ex.Message;
            }

            return Ok(result);
        }

        [HttpGet]
        [Route("product_types")]
        public async Task<IActionResult> GetProductTypes()
        {
            const string loggerHeader = "GetProductTypes";
            var result = new ApiJsonResult();
            try
            {
                var userLogin = await _userService.GetCurrentUserLogin(HttpContext);
                _logService.Info($"{loggerHeader} Get product types with tenantId {userLogin?.TenantId}");
                result.Data = await _productTypeService.GetAll(userLogin?.TenantId).AsNoTracking().ToListAsync();
            }
            catch (Exception ex)
            {
                result.Code = CodeModel.Fail;
                result.Message = ex.Message;
            }

            return Ok(result);
        }

        [HttpGet]
        [Route("product_statuses")]
        public async Task<IActionResult> GetProductStatuses()
        {
            const string loggerHeader = "GetProductStatuses";
            var result = new ApiJsonResult();
            try
            {
                var userLogin = await _userService.GetCurrentUserLogin(HttpContext);
                _logService.Info($"{loggerHeader} Get product statuses with tenantId {userLogin?.TenantId}");
                result.Data = await _productStatusService.GetAll(userLogin?.TenantId).AsNoTracking().ToListAsync();
            }
            catch (Exception ex)
            {
                result.Code = CodeModel.Fail;
                result.Message = ex.Message;
            }

            return Ok(result);
        }        

        [HttpGet]
        [Route("product_manufacturers")]
        public async Task<IActionResult> GetProductManufacturers()
        {
            const string loggerHeader = "GetProductManufacturers";
            var result = new ApiJsonResult();
            try
            {
                var userLogin = await _userService.GetCurrentUserLogin(HttpContext);
                _logService.Info($"{loggerHeader} Get product manufacturers with tenantId {userLogin?.TenantId}");
                result.Data = await _productManufacturerService.GetAll(userLogin?.TenantId).AsNoTracking().ToListAsync();
            }
            catch (Exception ex)
            {
                result.Code = CodeModel.Fail;
                result.Message = ex.Message;
            }

            return Ok(result);
        }

        [HttpGet]
        [Route("tax_categories")]
        public async Task<IActionResult> GetTaxCategories()
        {
            const string loggerHeader = "GetTaxCategories";
            var result = new ApiJsonResult();
            try
            {
                var userLogin = await _userService.GetCurrentUserLogin(HttpContext);
                _logService.Info($"{loggerHeader} Get tax categories with tenantId {userLogin?.TenantId}");
                result.Data = await _taxCategoryService.GetAll(userLogin?.TenantId).AsNoTracking().ToListAsync();
            }
            catch (Exception ex)
            {
                result.Code = CodeModel.Fail;
                result.Message = ex.Message;
            }

            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> CreateProduct([FromBody] ProductDto productData)
        {
            const string loggerHeader = "CreateProduct -";
            _logService.Info($"{loggerHeader} Start");
            var result = new ApiJsonResult();
            try
            {
                var userLogin = await _userService.GetCurrentUserLogin(HttpContext);
                _logService.Info($"{loggerHeader} Create product with tenantId {userLogin.TenantId}");
                result = await _productService.Create(userLogin.TenantId, productData);
            }
            catch (Exception ex)
            {
                _logService.Error($"{loggerHeader} Throw error {ex.Message}");
                result.Code = CodeModel.Fail;
                result.Message = ex.Message;
            }

            return Ok(result);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateProduct([FromBody] ProductDto productData)
        {
            const string loggerHeader = "UpdateProduct -";
            _logService.Info($"{loggerHeader} Start");
            var result = new ApiJsonResult();
            try
            {
                var userLogin = await _userService.GetCurrentUserLogin(HttpContext);
                _logService.Info($"{loggerHeader} Update product with tenantId {userLogin.TenantId}");
                result = await _productService.Update(userLogin.TenantId, productData);
            }
            catch (Exception ex)
            {
                _logService.Error($"{loggerHeader} Throw error {ex.Message}");
                result.Code = CodeModel.Fail;
                result.Message = ex.Message;
            }

            return Ok(result);
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteProduct([FromQuery] int id)
        {
            const string loggerHeader = "DeleteProduct -";
            var result = new ApiJsonResult();
            try
            {
                _logService.Info($"{loggerHeader} Delete products with id {id}");
                result = await _productService.Delete(id);
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