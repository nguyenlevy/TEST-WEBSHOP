using Microsoft.EntityFrameworkCore.Migrations;

namespace OrderModule.Migrations
{
    public partial class AddOrderTypeColumnForOrderTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "OrderType",
                table: "Order",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "OrderType",
                table: "Order");
        }
    }
}
