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
    public class CategoryService : ICategoryService
    {
        private readonly IUnitOfWorkWebClient _unitOfWork;
        private readonly IMapper _mapper;
        public CategoryService(
            IUnitOfWorkWebClient unitOfWork,
            IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        private IQueryable<Category> GetById(int id)
        {
            return _unitOfWork.CategoryRepository.FindByCondition(p => p.Id == id);
        }

        public async Task<List<List<CategoryDto>>> GetMenuCategory()
        {
            List<List<CategoryDto>> lstCategory = new List<List<CategoryDto>>();
            var categorys = await _unitOfWork.CategoryRepository.FindAll().Where(p => p.ParentCategoryId <= 0).ToListAsync();
            foreach (var category in categorys)
            {
                List<CategoryDto> lstCategorySub = new List<CategoryDto>();
                var subcategorys = _unitOfWork.CategoryRepository.FindAll().Where(p => p.ParentCategoryId == category.Id);
                foreach (var subcategory in subcategorys)
                {
                    var subcategorydto = _mapper.Map<CategoryDto>(subcategory);
                    lstCategorySub.Add(subcategorydto);
                }
                lstCategory.Add(lstCategorySub);
            }
            return lstCategory;
        }

        IQueryable<Category> ICategoryService.GetById(int id)
        {
            throw new NotImplementedException();
        }
    }
}
