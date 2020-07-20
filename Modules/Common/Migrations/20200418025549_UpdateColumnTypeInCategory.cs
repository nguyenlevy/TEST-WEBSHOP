using Microsoft.EntityFrameworkCore.Migrations;

namespace Common.Migrations
{
    public partial class UpdateColumnTypeInCategory : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Note",
                table: "Category",
                newName: "nvarchar(200)");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Category",
                newName: "nvarchar(100)");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "nvarchar(200)",
                table: "Category",
                newName: "Note");

            migrationBuilder.RenameColumn(
                name: "nvarchar(100)",
                table: "Category",
                newName: "Name");
        }
    }
}
