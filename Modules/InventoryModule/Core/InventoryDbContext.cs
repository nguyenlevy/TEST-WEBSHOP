using Core.Core.Helper;
using InventoryModule.Models.Inventories;
using InventoryModule.Models.Products;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace WarehousingModule.Core
{
    public class InventoryDbContext : DbContext
    {
        public InventoryDbContext()
        {
        }

        public DbSet<Inventory> Inventories { get; set; }
        public DbSet<Product> Products { get; set; }

        public InventoryDbContext(DbContextOptions<InventoryDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                IConfigurationRoot configuration = new ConfigurationBuilder()
                    .Build();
                optionsBuilder
                    .UseSqlServer(SalesConfiguration.GetConnectionString());
            }
        }
    }
}
