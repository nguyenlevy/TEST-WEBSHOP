using Microsoft.EntityFrameworkCore.Migrations;

namespace CustomerModule.Migrations
{
    public partial class ChangeIntToLongForUserModifiedIdForCustomerModule : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<long>(
                name: "UserModifiedId",
                table: "Customer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "UserModifiedId",
                table: "Customer",
                type: "int",
                nullable: true,
                oldClrType: typeof(long),
                oldNullable: true);
        }
    }
}
