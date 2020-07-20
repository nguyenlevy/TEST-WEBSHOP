using Common.Models.Categories;
using Common.Models.Products;
using Core.Core.Helper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using ProductModule.Models.Inventories;

namespace ProductModule.Core
{
    public class ProductDbContext : DbContext
    {
        public ProductDbContext()
        {
        }

        public ProductDbContext(DbContextOptions<ProductDbContext> options)
            : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<ProductManufacturer> ProductManufacturers { get; set; }
        public DbSet<ProductType> ProductTypes { get; set; }
        public DbSet<TaxCategory> TaxCategories { get; set; }
        public DbSet<ProductCategory> ProductCategories { get; set; }
        public DbSet<ProductStatus> ProductStatuses { get; set; }
        public DbSet<Inventory> Inventories { get; set; }
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
