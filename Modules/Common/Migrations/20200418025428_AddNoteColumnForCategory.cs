using Microsoft.EntityFrameworkCore.Migrations;

namespace Common.Migrations
{
    public partial class AddNoteColumnForCategory : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Note",
                table: "Category",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Note",
                table: "Category");
        }
    }
}
