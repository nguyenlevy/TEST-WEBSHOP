using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Core;
using Core.Core.Helper;
using Microsoft.AspNetCore.Mvc;
using WebClient.Models.Dto;
using WebClientService.Services;

namespace CRM.Controllers.WebClient
{
    [Route("api/Attributes")]
    [ApiController]
    public class AttributeController : ControllerBase
    {

        //private readonly ICategoryService _CategoryService;
        private readonly LogService _logService;
        private readonly IAttributeService _AttributeService;
        public AttributeController(
            IAttributeService AttributeService,
            LogService logService)
        {
            _AttributeService = AttributeService;
            _logService = logService;
        }
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            const string loggerHeader = "Attributes -";
            _logService.Info($"{loggerHeader} Start");
            var result = new ApiJsonResult();
            try
            {
                result.Data = await _AttributeService.GetAll();
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
