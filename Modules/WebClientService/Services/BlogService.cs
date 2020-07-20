using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebClient.Core;
using WebClient.Models;
using WebClient.Models.Dto;
using WebClientService.Models;

namespace WebClientService.Services
{
    public class BlogService : IBlogService
    {
        private readonly IUnitOfWorkWebClient _unitOfWork;
        private readonly IMapper _mapper;
        public BlogService(
            IUnitOfWorkWebClient unitOfWork,
            IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public IQueryable<Blog> GetById(int id)
        {
            return _unitOfWork.BlogRepository.FindByCondition(p => p.Id == id);
        }

        public async Task<List<Blog>> GetAll()
            {
            //List<List<BlogDto>> lstBlog = new List<List<BlogDto>>();
            var Blogs = await _unitOfWork.BlogRepository.FindAll().ToListAsync();
            return Blogs;
        }
        public async Task<List<Blog>> GetBlogByCategory(int categoryId)
        {
            var Blogs = await _unitOfWork.BlogRepository.FindAll().Where(x=>x.BlogCategoryId == categoryId).ToListAsync();
            return Blogs;
        }
        public async Task<List<BlogCategory>> GetBlogCategory()
        {
            var Blogs = await _unitOfWork.BlogCategoryRepository.FindAll().ToListAsync();
            return Blogs;
        }

    }
}
