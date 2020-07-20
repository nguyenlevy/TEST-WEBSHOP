using Microsoft.EntityFrameworkCore.Migrations;

namespace CustomerModule.Migrations
{
    public partial class AddTaxCodeInCustomer : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "TaxCode",
                table: "Customer",
                type: "varchar(50)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TaxCode",
                table: "Customer");
        }
    }
}
