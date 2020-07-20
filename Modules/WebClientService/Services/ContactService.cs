using AutoMapper;
using Core.Core;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WebClient.Core;
using WebClientService.Models;

namespace WebClientService.Services
{
   public class ContactService : IContactService
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWorkWebClient _unitOfWork;
        public ContactService(
          IUnitOfWorkWebClient unitOfWork,
          IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<ApiJsonResult> Create(Customer data)
        {

            var result = new ApiJsonResult();
            if (string.IsNullOrEmpty(data.Name))
            {
                result.Code = CodeModel.Fail;
                result.Message = "Name is not null";
                return result;
            }
           
            if (string.IsNullOrEmpty(data.PhoneNumber))
            {
                result.Code = CodeModel.Fail;
                result.Message = "PhoneNumber is not null";
                return result;
            }
         
            var customer = _mapper.Map<Customer>(data);
          
            _unitOfWork.CustomerRepository.Create(customer);
            await _unitOfWork.Commit();
            return result;
        }
    }
}
