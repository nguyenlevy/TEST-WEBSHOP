using Authentication.Core;
using AutoMapper;
using Common.Models.Categories;
using Common.Modes.Categories;
using Common.Modes.Categories.Dto;
using Common.Modes.UserLogin;
using Core.Core;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Common.Services.Categories
{
    public class CategoryService : ICategoryService
    {
        private readonly IUnitOfWorkCommon _unitOfWork;
        private readonly IMapper _mapper;
        public CategoryService(
            IUnitOfWorkCommon unitOfWork,
            IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<ApiJsonResult> Create(UserLogin userLogin, CategoryDto data)
        {
            var result = new ApiJsonResult();
            if (string.IsNullOrEmpty(data.Name))
            {
                result.Code = CodeModel.Fail;
                result.Message = "Name is null";
                return result;
            }
            if (await ValidateDuplicateName(data.Id, data.Name))
            {
                result.Code = CodeModel.Fail;
                result.Message = "Name is duplicated";
                return result;
            }
            var category = _mapper.Map<Category>(data);
            category.TenantId = userLogin.TenantId.Value;
            category.CreatedDate = DateTime.Now;
            category.UserModifiedId = userLogin.UserId;
            _unitOfWork.CategoryRepository.Create(category);
            await _unitOfWork.Commit();
            return result;
        }

        public async Task<ApiJsonResult> Delete(int id)
        {
            var result = new ApiJsonResult();
            var category = await GetById(id)
                                .Include(p => p.ParentCategory)
                                .Include(p => p.ProductCategories)
                                .AsNoTracking()                                
                                .FirstOrDefaultAsync();
            if (category == null)
            {
                result.Code = CodeModel.Fail;
                result.Message = "Product Category is not found";
                return result;
            }
            if (category.ParentCategory != null || category.ProductCategories.Any())
            {
                result.Code = CodeModel.Fail;
                result.Message = "CATEGORY_IN_USE";
                return result;
            }
            _unitOfWork.CategoryRepository.Delete(category);
            await _unitOfWork.Commit();
            return result;
        }

        public async Task<List<CategoryDto>> GetAll(CategoryFilter categoryFilter)
        {
            var query = _unitOfWork.CategoryRepository.FindAll();
            if (categoryFilter.TenantId.HasValue)
            {
                query = query.Where(p => p.TenantId == categoryFilter.TenantId.Value);
            }
            if (categoryFilter.Id.HasValue)
            {
                query = query.Where(p => p.Id == categoryFilter.Id.Value);
            }
            if (!string.IsNullOrEmpty(categoryFilter.Name))
            {
                query = query.Where(p => p.Name.ToLower() == categoryFilter.Name.ToLower());
            }
            var data = await query.Include(p => p.ParentCategory)
                                    .AsNoTracking()
                                    .OrderBy(p => p.Name).ToListAsync();
            return data.Select(p => new CategoryDto { 
                Id = p.Id,
                Name = p.Name,
                ParentCategoryId = p.ParentCategoryId,
                ParentCategoryName = p.ParentCategory?.Name,
                Note = p.Note
            }).ToList();
        }

        public async Task<ApiJsonResult> Update(UserLogin userLogin, CategoryDto data)
        {
            var result = new ApiJsonResult();
            if (string.IsNullOrEmpty(data.Name))
            {
                result.Code = CodeModel.Fail;
                result.Message = "Name is null";
                return result;
            }
            var checkProduct = await GetById(data.Id.Value).AsNoTracking().FirstOrDefaultAsync();
            if (checkProduct == null)
            {
                result.Code = CodeModel.Fail;
                result.Message = "Product Category is not found";
                return result;
            }
            if (await ValidateDuplicateName(data.Id, data.Name))
            {
                result.Code = CodeModel.Fail;
                result.Message = "Name is duplicated";
                return result;
            }
            var category = _mapper.Map<Category>(data);
            category.TenantId = userLogin.TenantId.Value;
            category.UserModifiedId = userLogin.UserId;
            category.ModifiedDate = DateTime.Now;
            _unitOfWork.CategoryRepository.Update(category);
            await _unitOfWork.Commit();
            return result;
        }

        private IQueryable<Category> GetById(int id)
        {
            return _unitOfWork.CategoryRepository.FindByCondition(p => p.Id == id);
        }

        private List<CategoryDto> GetCategoriesByParent(List<Category> categoryOrigins, List<Category> categoryFilters, string prefixName = "")
        {
            var categories = new List<CategoryDto>();
            foreach (var categoryFilter in categoryFilters)
            {
                var category = _mapper.Map<CategoryDto>(categoryFilter);
                var subCategories = categoryOrigins.Where(r => r.ParentCategoryId.HasValue && r.ParentCategoryId.Value == categoryFilter.Id)
                    .OrderBy(r => r.Name).ToList();
                var currentPrefix = "---" + prefixName;
                category.Name = string.IsNullOrEmpty(prefixName) ? category.Name : currentPrefix + category.Name;
                categories.Add(category);
                var subItems = GetCategoriesByParent(categoryOrigins, subCategories, currentPrefix);
                if (subItems.Any())
                {
                    categories.AddRange(subItems);
                }
            }
            return categories;
        }

        public async Task<bool> ValidateDuplicateName(int? id, string name)
        {
            var query = _unitOfWork.CategoryRepository.FindByCondition(p => p.Name.ToLower() == name.ToLower());
            if (id.HasValue)
            {
                query = query.Where(p => p.Id != id.Value);
            }
            return (await query.FirstOrDefaultAsync()) != null;
        }

        public async Task<List<CategoryDto>> GetAllAndSub(CategoryFilter categoryFilter)
        {
            var query = _unitOfWork.CategoryRepository.FindAll();
            if (categoryFilter.TenantId.HasValue)
            {
                query = query.Where(p => p.TenantId == categoryFilter.TenantId.Value);
            }
            var categoryOrigins = await query.AsNoTracking().OrderBy(p => p.Name).ToListAsync();
            var categoryFilters = categoryOrigins.Where(r => !r.ParentCategoryId.HasValue).OrderBy(r => r.Name).ToList();
            if (categoryFilter.Id.HasValue)
            {
                var exceptCategory = categoryOrigins.FirstOrDefault(p => p.Id == categoryFilter.Id);
                categoryFilters = categoryFilters.Where(p => exceptCategory.ParentCategoryId.HasValue || p.Id != exceptCategory.Id)
                                                .ToList();
                categoryOrigins = categoryOrigins.Where(p => !exceptCategory.ParentCategoryId.HasValue ||
                                                        (p.ParentCategoryId.HasValue && p.ParentCategoryId != exceptCategory.ParentCategoryId))
                                                .ToList();
            }            
            var data = GetCategoriesByParent(categoryOrigins, categoryFilters);
            return data;
        }
    }
}
