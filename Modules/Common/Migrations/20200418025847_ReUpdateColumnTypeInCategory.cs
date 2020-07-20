using Microsoft.EntityFrameworkCore.Migrations;

namespace Common.Migrations
{
    public partial class ReUpdateColumnTypeInCategory : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "nvarchar(200)",
                table: "Category",
                newName: "Note");

            migrationBuilder.RenameColumn(
                name: "nvarchar(100)",
                table: "Category",
                newName: "Name");

            migrationBuilder.AlterColumn<string>(
                name: "Note",
                table: "Category",
                type: "nvarchar(200)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Category",
                type: "nvarchar(100)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Note",
                table: "Category",
                newName: "nvarchar(200)");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Category",
                newName: "nvarchar(100)");

            migrationBuilder.AlterColumn<string>(
                name: "nvarchar(200)",
                table: "Category",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(200)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "nvarchar(100)",
                table: "Category",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(100)",
                oldNullable: true);
        }
    }
}
