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

        public async Task<List<CategoryListDto>> GetOneId(int id)
        {

            List<CategoryListDto> lstParent = new List<CategoryListDto>();
            var categorys = _unitOfWork.CategoryRepository.FindAll().Where(x => x.Id == id).ToList();
            var categorysAll = _unitOfWork.CategoryRepository.FindAll().ToList();
            var query = (from c in categorys

                         select new CategoryListDto
                         {
                             Name = c.Name,
                             Id = c.Id,
                             listChildren = (from t in categorysAll
                                             where id == t.ParentCategoryId
                                             select new CategoryListDto
                                             {
                                                 Name = t.Name,
                                                 ParentCategoryId = t.ParentCategoryId,
                                                 Id = t.Id
                                             }).ToList(),
                         }).ToList();

                  
            return query;

        }


        public async Task<List<CategoryListDto>> GetMenuCategory()
        {

            List<CategoryListDto> lstParent = new List<CategoryListDto>();
            var categorys = await _unitOfWork.CategoryRepository.FindAll().ToListAsync();
            foreach (var data in categorys)
            {
                CategoryListDto dataCategoryParent = new CategoryListDto();
                if (data.ParentCategoryId == null)
                {
                    dataCategoryParent.Name = data.Name;
                    dataCategoryParent.Id = data.Id;
                    dataCategoryParent.ParentCategoryId = data.ParentCategoryId;
                    List<CategoryListDto> lstChild = new List<CategoryListDto>();
                    foreach (var data1 in categorys)
                    {
                        if (data1.ParentCategoryId == dataCategoryParent.Id)
                        {
                            CategoryListDto dataCategoryChild = new CategoryListDto();
                            dataCategoryChild.Name = data1.Name;
                            dataCategoryChild.Id = data1.Id;
                            dataCategoryChild.ParentCategoryId = data1.ParentCategoryId;
                            List<CategoryListDto> lstChildren = new List<CategoryListDto>();
                            foreach (var data2 in categorys)
                            {
                                if (data2.ParentCategoryId == dataCategoryChild.Id)
                                {
                                    CategoryListDto dataCategoryChildren = new CategoryListDto();
                                    dataCategoryChildren.Name = data2.Name;
                                    dataCategoryChildren.Id = data2.Id;
                                    dataCategoryChildren.ParentCategoryId = data2.ParentCategoryId;
                                    lstChildren.Add(dataCategoryChildren);
                                }
                            }
                            dataCategoryChild.listChildren = lstChildren;
                            lstChild.Add(dataCategoryChild);
                        }
                    }
                    dataCategoryParent.listChildren = lstChild;
                    lstParent.Add(dataCategoryParent);
                }
            }
            return lstParent;

        }

        public async Task<List<Category>> GetSubCategorys(int Category)
        {
            var categorys = await _unitOfWork.CategoryRepository.FindAll().Where(p => p.ParentCategoryId == Category).ToListAsync();
            return categorys;
        }

        IQueryable<Category> ICategoryService.GetById(int id)
        {
            throw new NotImplementedException();
        }
    }
}
