using Microsoft.EntityFrameworkCore.Migrations;

namespace ProductModule.Migrations
{
    public partial class RemoveWeightColumnInProductTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Weight",
                table: "Product");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<decimal>(
                name: "Weight",
                table: "Product",
                type: "decimal(18, 4)",
                nullable: true);
        }
    }
}
