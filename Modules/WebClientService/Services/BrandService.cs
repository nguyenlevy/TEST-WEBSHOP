using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebClient.Core;
using WebClientService.Models;

namespace WebClientService.Services
{
   public class BrandService : IBrandService
    {
        private readonly IUnitOfWorkWebClient _unitOfWork;
        private readonly IMapper _mapper;
        public BrandService(
            IUnitOfWorkWebClient unitOfWork,
            IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<List<Brand>> GetAll()
        {
            var Brand = await _unitOfWork.BrandRepository.FindAll().ToListAsync();
            return Brand;
        }
    }
}
