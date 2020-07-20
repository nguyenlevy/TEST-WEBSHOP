using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BalanceModule.Migrations
{
    public partial class UpdateBalanceTableAndAddBalanceCategory : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "BalanceCategoryId",
                table: "Balance",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Code",
                table: "Balance",
                type: "nvarchar(100)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "EmployeeId",
                table: "Balance",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "SellerId",
                table: "Balance",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "BalanceCategory",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TenantId = table.Column<int>(nullable: false),
                    Name = table.Column<string>(type: "nvarchar(150)", nullable: true),
                    CreatedDate = table.Column<DateTime>(nullable: true),
                    ModifiedDate = table.Column<DateTime>(nullable: true),
                    UserModifiedId = table.Column<long>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BalanceCategory", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Balance_BalanceCategoryId",
                table: "Balance",
                column: "BalanceCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Balance_EmployeeId",
                table: "Balance",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_Balance_PaymentMethodId",
                table: "Balance",
                column: "PaymentMethodId");

            migrationBuilder.CreateIndex(
                name: "IX_Balance_StoreId",
                table: "Balance",
                column: "StoreId");

            migrationBuilder.AddForeignKey(
                name: "FK_Balance_BalanceCategory_BalanceCategoryId",
                table: "Balance",
                column: "BalanceCategoryId",
                principalTable: "BalanceCategory",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Balance_Employee_EmployeeId",
                table: "Balance",
                column: "EmployeeId",
                principalTable: "Employee",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Balance_PaymentMethod_PaymentMethodId",
                table: "Balance",
                column: "PaymentMethodId",
                principalTable: "PaymentMethod",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Balance_Store_StoreId",
                table: "Balance",
                column: "StoreId",
                principalTable: "Store",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Balance_BalanceCategory_BalanceCategoryId",
                table: "Balance");

            migrationBuilder.DropForeignKey(
                name: "FK_Balance_Employee_EmployeeId",
                table: "Balance");

            migrationBuilder.DropForeignKey(
                name: "FK_Balance_PaymentMethod_PaymentMethodId",
                table: "Balance");

            migrationBuilder.DropForeignKey(
                name: "FK_Balance_Store_StoreId",
                table: "Balance");

            migrationBuilder.DropTable(
                name: "BalanceCategory");

            migrationBuilder.DropIndex(
                name: "IX_Balance_BalanceCategoryId",
                table: "Balance");

            migrationBuilder.DropIndex(
                name: "IX_Balance_EmployeeId",
                table: "Balance");

            migrationBuilder.DropIndex(
                name: "IX_Balance_PaymentMethodId",
                table: "Balance");

            migrationBuilder.DropIndex(
                name: "IX_Balance_StoreId",
                table: "Balance");

            migrationBuilder.DropColumn(
                name: "BalanceCategoryId",
                table: "Balance");

            migrationBuilder.DropColumn(
                name: "Code",
                table: "Balance");

            migrationBuilder.DropColumn(
                name: "EmployeeId",
                table: "Balance");

            migrationBuilder.DropColumn(
                name: "SellerId",
                table: "Balance");
        }
    }
}
