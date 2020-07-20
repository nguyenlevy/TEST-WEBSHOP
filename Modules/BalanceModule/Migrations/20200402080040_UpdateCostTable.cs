using Microsoft.EntityFrameworkCore.Migrations;

namespace BalanceModule.Migrations
{
    public partial class UpdateCostTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Amount",
                table: "Cost");

            migrationBuilder.AddColumn<string>(
                name: "Code",
                table: "Cost",
                type: "nvarchar(100)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "EmployeeId",
                table: "Cost",
                nullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "Price",
                table: "Cost",
                type: "decimal(18, 4)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "SellerId",
                table: "Cost",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "StoreId",
                table: "Cost",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Cost_EmployeeId",
                table: "Cost",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_Cost_PaymentMethodId",
                table: "Cost",
                column: "PaymentMethodId");

            migrationBuilder.CreateIndex(
                name: "IX_Cost_StoreId",
                table: "Cost",
                column: "StoreId");

            migrationBuilder.AddForeignKey(
                name: "FK_Cost_Employee_EmployeeId",
                table: "Cost",
                column: "EmployeeId",
                principalTable: "Employee",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Cost_PaymentMethod_PaymentMethodId",
                table: "Cost",
                column: "PaymentMethodId",
                principalTable: "PaymentMethod",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Cost_Store_StoreId",
                table: "Cost",
                column: "StoreId",
                principalTable: "Store",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cost_Employee_EmployeeId",
                table: "Cost");

            migrationBuilder.DropForeignKey(
                name: "FK_Cost_PaymentMethod_PaymentMethodId",
                table: "Cost");

            migrationBuilder.DropForeignKey(
                name: "FK_Cost_Store_StoreId",
                table: "Cost");

            migrationBuilder.DropIndex(
                name: "IX_Cost_EmployeeId",
                table: "Cost");

            migrationBuilder.DropIndex(
                name: "IX_Cost_PaymentMethodId",
                table: "Cost");

            migrationBuilder.DropIndex(
                name: "IX_Cost_StoreId",
                table: "Cost");

            migrationBuilder.DropColumn(
                name: "Code",
                table: "Cost");

            migrationBuilder.DropColumn(
                name: "EmployeeId",
                table: "Cost");

            migrationBuilder.DropColumn(
                name: "Price",
                table: "Cost");

            migrationBuilder.DropColumn(
                name: "SellerId",
                table: "Cost");

            migrationBuilder.DropColumn(
                name: "StoreId",
                table: "Cost");

            migrationBuilder.AddColumn<int>(
                name: "Amount",
                table: "Cost",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
