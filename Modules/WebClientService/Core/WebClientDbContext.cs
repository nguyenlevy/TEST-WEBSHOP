using Core.Core.Helper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using WebClient.Models;
using WebClientService.Models;
//using WebClientService.models.
//using ProductModule.Models.Inventories;

namespace WebClient.Core
{
    public class WebClientDbContext : DbContext
    {
        public WebClientDbContext()
        {
        }

        public WebClientDbContext(DbContextOptions<WebClientDbContext> options)
            : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<ProductCategory> ProductCategories { get; set; }
        public DbSet<Policy> Policies { get; set; }
        public DbSet<Blog> Blogs { get; set; }
        public DbSet<Banner> Banners { get; set; }
        public DbSet<Attribute> Attribute { get; set; }
        public DbSet<AttributeValue> AttributeValue { get; set; }
        public DbSet<AttributeValue_Mapping> AttributeValue_Mapping { get; set; }
        public DbSet<Customer> Customer { get; set; }
        public DbSet<Brand> Brand { get; set; }
        public DbSet<BlogCategory> BlogCategory { get; set; }
        public DbSet<ProductManufacturer> ProductManufacturer { get; set; }
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
