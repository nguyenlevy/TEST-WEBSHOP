using CustomerModule.Models.Customers;
using System.Threading.Tasks;

namespace CustomerModule.Core
{
    public interface IUnitOfWorkCustomer
    {
        Task Commit();

        GenericRepository<Customer> CustomerRepository { get; }
    }
}
