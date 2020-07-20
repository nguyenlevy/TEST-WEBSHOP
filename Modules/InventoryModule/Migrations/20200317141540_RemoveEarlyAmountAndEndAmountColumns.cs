using Microsoft.EntityFrameworkCore.Migrations;

namespace InventoryModule.Migrations
{
    public partial class RemoveEarlyAmountAndEndAmountColumns : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EarlyInventory",
                table: "Inventory");

            migrationBuilder.DropColumn(
                name: "EndInventory",
                table: "Inventory");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "EarlyInventory",
                table: "Inventory",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "EndInventory",
                table: "Inventory",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
