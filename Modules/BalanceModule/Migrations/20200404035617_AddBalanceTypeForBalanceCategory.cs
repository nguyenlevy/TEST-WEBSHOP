using Microsoft.EntityFrameworkCore.Migrations;

namespace BalanceModule.Migrations
{
    public partial class AddBalanceTypeForBalanceCategory : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "BalanceType",
                table: "BalanceCategory",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BalanceType",
                table: "BalanceCategory");
        }
    }
}
