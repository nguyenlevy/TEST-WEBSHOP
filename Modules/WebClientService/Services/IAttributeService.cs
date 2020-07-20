
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebClientService.Models;

namespace WebClientService.Services
{
    public interface IAttributeService
    {
        IQueryable<Attribute> GetById(int id);
        Task<List<AttributeList>> GetAll();
    }
}
