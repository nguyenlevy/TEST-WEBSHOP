//using AutoMapper;
//using Microsoft.EntityFrameworkCore;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebClient.Core;
using WebClient.Models;
using WebClient.Models.Dto;

namespace WebClientService.Services
{
    public class PolicyService : IPolicyService
    {
        private readonly IUnitOfWorkWebClient _unitOfWork;
        private readonly IMapper _mapper;
        public PolicyService(
            IUnitOfWorkWebClient unitOfWork,
            IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public IQueryable<Policy> GetById(int id)
        {
            return _unitOfWork.PolicyRepository.FindByCondition(p => p.Id == id);
        }

        public async Task<List<Policy>> GetAll()
        {
            //List<List<PolicyDto>> lstPolicy = new List<List<PolicyDto>>();
            //List<PolicyDto> lstPolicy = new List<PolicyDto>();
            var Policys = await _unitOfWork.PolicyRepository.FindAll().ToListAsync();
            return Policys;
        }

        IQueryable<Policy> IPolicyService.GetById(int id)
        {
            throw new NotImplementedException();
        }
    }
}
