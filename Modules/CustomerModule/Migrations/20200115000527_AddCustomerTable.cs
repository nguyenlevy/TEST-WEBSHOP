using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CustomerModule.Migrations
{
    public partial class AddCustomerTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Customer",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CustomerCode = table.Column<string>(type: "varchar(50)", nullable: true),
                    Email = table.Column<string>(type: "varchar(1000)", nullable: true),
                    TenantId = table.Column<int>(nullable: false),
                    Gender = table.Column<string>(type: "char(1)", nullable: true),
                    Birthday = table.Column<DateTime>(nullable: true),
                    CustomerTypeId = table.Column<byte>(type: "tinyint", nullable: true),
                    PhoneNumber = table.Column<string>(type: "varchar(20)", nullable: true),
                    Name = table.Column<string>(type: "varchar(50)", nullable: true),
                    Address = table.Column<string>(type: "varchar(200)", nullable: true),
                    LastOrder = table.Column<DateTime>(nullable: true),
                    TotalSales = table.Column<decimal>(type: "decimal(18, 0)", nullable: true),
                    PaidAmount = table.Column<decimal>(type: "decimal(18, 0)", nullable: true),
                    DebtAmount = table.Column<decimal>(type: "decimal(18, 0)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customer", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Customer");
        }
    }
}
