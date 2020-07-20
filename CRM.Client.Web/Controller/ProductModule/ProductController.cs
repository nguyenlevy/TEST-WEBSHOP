//using Authentication.Services.Users;
using Core.Core;
using Core.Core.Helper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
//using ProductModule.Services.Products;
//using ProductModule.Services.TaxCategories;
using System;
using System.Threading.Tasks;

namespace CRM.Client.Web.Controller.ProductModule
{

    [Route("api/products")]
    [ApiController]
    public class ProductController: ControllerBase
    {
        //private readonly IProductStatusService _productStatusService;
        //public ProductController(IProductStatusService productStatusService)
        //{
        //    _productStatusService = productStatusService;
        
        //}

        //[HttpGet]
        //[Route("product_statuses")]
        //public async Task<IActionResult> GetProductStatuses()
        //{
        //    var result = new ApiJsonResult();
        //    try
        //    {
        //        result.Data = await _productStatusService.GetAll(1).AsNoTracking().ToListAsync();
        //    }
        //    catch (Exception ex)
        //    {
        //        result.Code = CodeModel.Fail;
        //        result.Message = ex.Message;
        //    }

        //    return Ok(result);
        //}

    }
}
