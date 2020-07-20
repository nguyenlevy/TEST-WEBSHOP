//using Core.Core;
//using Core.Core.Helper;
using Core.Core;
using Core.Core.Helper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
//using PolicyModule.Services.Policys;
//using PolicyModule.Services.Policys;


using System;
using System.Threading.Tasks;
using WebClient.Models.Dto;
using WebClient.Services;
using WebClientService.Services;
//using WebClient.;

namespace CRM.Controllers.WebClient
{
    [Route("api/Policys")]
    [ApiController]
    public class PolicyController : ControllerBase
    {
        private readonly IPolicyService _PolicyService;
        private readonly LogService _logService;
        public PolicyController(
            IPolicyService PolicyService,
            LogService logService)
        {
            _PolicyService = PolicyService;
            _logService = logService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            const string loggerHeader = "GetPolicys -";
            _logService.Info($"{loggerHeader} Start");
            var result = new ApiJsonResult();
            try
            {
                result.Data = await _PolicyService.GetAll();
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