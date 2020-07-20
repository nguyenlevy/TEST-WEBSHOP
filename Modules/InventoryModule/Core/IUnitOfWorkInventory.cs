using InventoryModule.Models.Inventories;
using InventoryModule.Models.Products;
using System.Threading.Tasks;

namespace WarehousingModule.Core
{
    public interface IUnitOfWorkInventory
    {
        Task Commit();
        GenericRepository<Inventory> InventortRepository { get; }
        GenericRepository<Product> ProductRepository { get; }
    }
}
