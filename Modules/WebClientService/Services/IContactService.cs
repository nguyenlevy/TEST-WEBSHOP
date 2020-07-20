using Core.Core;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WebClientService.Models;

namespace WebClientService.Services
{
   public interface IContactService
    {
        Task<ApiJsonResult> Create(Customer data);
    }
}
