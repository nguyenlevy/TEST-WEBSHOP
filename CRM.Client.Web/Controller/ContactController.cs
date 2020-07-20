//using Core.Core;
//using Core.Core.Helper;
using Core.Core;
using Core.Core.Helper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
//using ContactModule.Services.Contacts;
//using ContactModule.Services.Contacts;


using System;
using System.Threading.Tasks;
using WebClient.Models.Dto;
using WebClient.Services;
using WebClientService.Models;
using WebClientService.Services;
//using WebClient.;

namespace CRM.Controllers.WebClient
{
    [Route("api/Contacts")]
    [ApiController]
    public class ContactController : ControllerBase
    {
		private readonly IContactService _contactService;
		private readonly LogService _logService;
        public ContactController(
			IContactService ContactService,
			LogService logService)
        {
			_contactService = ContactService;
            _logService = logService;
        }

		[HttpPost]
		public async Task<IActionResult> Create([FromBody] Customer data)
		{
			const string loggerHeader = "Create Contact -";
			_logService.Info($"{loggerHeader} Start");
			var result = new ApiJsonResult();
			try
			{
				result.Data = await _contactService.Create(data);
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