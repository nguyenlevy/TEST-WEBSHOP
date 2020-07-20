using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BalanceModule.Migrations
{
    public partial class UpdateBalanceDate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ReceiptDate",
                table: "Balance");

            migrationBuilder.AddColumn<DateTime>(
                name: "BalanceDate",
                table: "Balance",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BalanceDate",
                table: "Balance");

            migrationBuilder.AddColumn<DateTime>(
                name: "ReceiptDate",
                table: "Balance",
                type: "datetime2",
                nullable: true);
        }
    }
}
