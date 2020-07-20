using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WarehousingModule.Migrations
{
    public partial class AddInventoryTableInWarehousingModule : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Inventory",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProductId = table.Column<int>(nullable: false),
                    Amount = table.Column<int>(nullable: false),
                    EarlyInventory = table.Column<int>(nullable: false),
                    AmountOfImport = table.Column<int>(nullable: false),
                    AmountOfExport = table.Column<int>(nullable: false),
                    EndInventory = table.Column<int>(nullable: false),
                    TenantId = table.Column<int>(nullable: false),
                    CreatedDate = table.Column<DateTime>(nullable: true),
                    ModifiedDate = table.Column<DateTime>(nullable: true),
                    UserModifiedId = table.Column<long>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Inventory", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Inventory");
        }
    }
}
