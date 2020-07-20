//using AutoMapper;
//using Microsoft.EntityFrameworkCore;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebClient.Core;
using WebClient.Models;
using WebClient.Models.Dto;

namespace WebClientService.Services
{
    public class BannerService : IBannerService
    {
        private readonly IUnitOfWorkWebClient _unitOfWork;
        private readonly IMapper _mapper;
        public BannerService(
            IUnitOfWorkWebClient unitOfWork,
            IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public IQueryable<Banner> GetById(int id)
        {
            return _unitOfWork.BannerRepository.FindByCondition(p => p.Id == id);
        }

        public async Task<List<Banner>> GetAll()
        {
           
            var Banners = await _unitOfWork.BannerRepository.FindAll().ToListAsync();
            return Banners;
        }

        IQueryable<Banner> IBannerService.GetById(int id)
        {
            throw new NotImplementedException();
        }

      

    }
}
