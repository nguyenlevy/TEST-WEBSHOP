using Core.Core.Helper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using BalanceModule.Models.Carriers;
using BalanceModule.Models.Customers;
using BalanceModule.Models.Employees;
using BalanceModule.Models.OrderItems;
using BalanceModule.Models.OrderNotes;
using BalanceModule.Models.Orders;
using BalanceModule.Models.PaymentMethods;
using BalanceModule.Models.Shipments;
using BalanceModule.Models.Stores;
using BalanceModule.Models.Balances;
using BalanceModule.Models.Costs;
using BalanceModule.Models.CostTypes;

namespace BalanceModule.Core
{
    public class BalanceDbContext : DbContext
    {
        public BalanceDbContext()
        {
        }

        public BalanceDbContext(DbContextOptions<BalanceDbContext> options)
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
        public DbSet<Balance> Balances { get; set; }
        public DbSet<Cost> Costs { get; set; }
        public DbSet<CostType> CostTypes { get; set; }
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
