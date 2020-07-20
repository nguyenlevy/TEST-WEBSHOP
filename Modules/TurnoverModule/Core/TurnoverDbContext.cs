using Core.Core.Helper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using TurnoverModule.Models.Carriers;
using TurnoverModule.Models.Customers;
using TurnoverModule.Models.Employees;
using TurnoverModule.Models.OrderItems;
using TurnoverModule.Models.OrderNotes;
using TurnoverModule.Models.Orders;
using TurnoverModule.Models.PaymentMethods;
using TurnoverModule.Models.Shipments;
using TurnoverModule.Models.Stores;

namespace TurnoverModule.Core
{
    public class TurnoverDbContext : DbContext
    {
        public TurnoverDbContext()
        {
        }

        public TurnoverDbContext(DbContextOptions<TurnoverDbContext> options)
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
