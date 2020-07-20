using Microsoft.EntityFrameworkCore.Migrations;

namespace InventoryModule.Migrations
{
    public partial class RestoreEarlyAndEndInventoryColumnsInInventoryTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "EarlyInventory",
                table: "Inventory",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "EndInventory",
                table: "Inventory",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EarlyInventory",
                table: "Inventory");

            migrationBuilder.DropColumn(
                name: "EndInventory",
                table: "Inventory");
        }
    }
}
