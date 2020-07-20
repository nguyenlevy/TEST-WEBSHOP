using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebClient.Models;
using WebClient.Models.Dto;
using WebClientService.Models;

namespace WebClientService.Services
{
    public interface IBlogService
    {
        public IQueryable<Blog> GetById(int id);
        public Task<List<Blog>> GetAll();

        Task<List<Blog>> GetBlogByCategory(int categoryId);
        Task<List<BlogCategory>> GetBlogCategory();

    }
}
