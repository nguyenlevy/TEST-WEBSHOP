using Core.Core.Helper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using ProfitModule.Models.Carriers;
using ProfitModule.Models.Customers;
using ProfitModule.Models.Employees;
using ProfitModule.Models.OrderItems;
using ProfitModule.Models.OrderNotes;
using ProfitModule.Models.Orders;
using ProfitModule.Models.PaymentMethods;
using ProfitModule.Models.Shipments;
using ProfitModule.Models.Stores;

namespace ProfitModule.Core
{
    public class ProfitDbContext : DbContext
    {
        public ProfitDbContext()
        {
        }

        public ProfitDbContext(DbContextOptions<ProfitDbContext> options)
            : base(options)
        {
        }

        public DbSet<Order> Orders { get; set; }
        public DbSet<Store> Stores { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Carrier> Carriers { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Shipment> Shipments { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<OrderNote> OrderNotes { get; set; }
        public DbSet<PaymentMethod> PaymentMethods { get; set; }
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
