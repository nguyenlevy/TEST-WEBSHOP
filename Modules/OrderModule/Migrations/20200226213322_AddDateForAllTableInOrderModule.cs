using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace OrderModule.Migrations
{
    public partial class AddDateForAllTableInOrderModule : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedOnUtc",
                table: "OrderNote");

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedDate",
                table: "Store",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ModifiedDate",
                table: "Store",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserModifiedId",
                table: "Store",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedDate",
                table: "Shipment",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ModifiedDate",
                table: "Shipment",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserModifiedId",
                table: "Shipment",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedDate",
                table: "PaymentMethod",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ModifiedDate",
                table: "PaymentMethod",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserModifiedId",
                table: "PaymentMethod",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedDate",
                table: "OrderNote",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ModifiedDate",
                table: "OrderNote",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserModifiedId",
                table: "OrderNote",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedDate",
                table: "OrderItem",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ModifiedDate",
                table: "OrderItem",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserModifiedId",
                table: "OrderItem",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedDate",
                table: "Order",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ModifiedDate",
                table: "Order",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserModifiedId",
                table: "Order",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedDate",
                table: "Employee",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ModifiedDate",
                table: "Employee",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserModifiedId",
                table: "Employee",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedDate",
                table: "Carrier",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ModifiedDate",
                table: "Carrier",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserModifiedId",
                table: "Carrier",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedDate",
                table: "Store");

            migrationBuilder.DropColumn(
                name: "ModifiedDate",
                table: "Store");

            migrationBuilder.DropColumn(
                name: "UserModifiedId",
                table: "Store");

            migrationBuilder.DropColumn(
                name: "CreatedDate",
                table: "Shipment");

            migrationBuilder.DropColumn(
                name: "ModifiedDate",
                table: "Shipment");

            migrationBuilder.DropColumn(
                name: "UserModifiedId",
                table: "Shipment");

            migrationBuilder.DropColumn(
                name: "CreatedDate",
                table: "PaymentMethod");

            migrationBuilder.DropColumn(
                name: "ModifiedDate",
                table: "PaymentMethod");

            migrationBuilder.DropColumn(
                name: "UserModifiedId",
                table: "PaymentMethod");

            migrationBuilder.DropColumn(
                name: "CreatedDate",
                table: "OrderNote");

            migrationBuilder.DropColumn(
                name: "ModifiedDate",
                table: "OrderNote");

            migrationBuilder.DropColumn(
                name: "UserModifiedId",
                table: "OrderNote");

            migrationBuilder.DropColumn(
                name: "CreatedDate",
                table: "OrderItem");

            migrationBuilder.DropColumn(
                name: "ModifiedDate",
                table: "OrderItem");

            migrationBuilder.DropColumn(
                name: "UserModifiedId",
                table: "OrderItem");

            migrationBuilder.DropColumn(
                name: "CreatedDate",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "ModifiedDate",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "UserModifiedId",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "CreatedDate",
                table: "Employee");

            migrationBuilder.DropColumn(
                name: "ModifiedDate",
                table: "Employee");

            migrationBuilder.DropColumn(
                name: "UserModifiedId",
                table: "Employee");

            migrationBuilder.DropColumn(
                name: "CreatedDate",
                table: "Carrier");

            migrationBuilder.DropColumn(
                name: "ModifiedDate",
                table: "Carrier");

            migrationBuilder.DropColumn(
                name: "UserModifiedId",
                table: "Carrier");

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedOnUtc",
                table: "OrderNote",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
