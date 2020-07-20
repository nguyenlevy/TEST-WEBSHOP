using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BalanceModule.Migrations
{
    public partial class inittables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Balance",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TenantId = table.Column<int>(nullable: false),
                    BalanceType = table.Column<int>(nullable: false),
                    PaymentMethodId = table.Column<int>(nullable: false),
                    StoreId = table.Column<int>(nullable: true),
                    ReceiptDate = table.Column<DateTime>(nullable: true),
                    Price = table.Column<decimal>(type: "decimal(18, 4)", nullable: true),
                    Note = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    CreatedDate = table.Column<DateTime>(nullable: true),
                    ModifiedDate = table.Column<DateTime>(nullable: true),
                    UserModifiedId = table.Column<long>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Balance", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Balance");
        }
    }
}
