using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ProductModule.Migrations
{
    public partial class AddDateForAllTableInProductModule : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedDate",
                table: "TaxCategory",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ModifiedDate",
                table: "TaxCategory",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserModifiedId",
                table: "TaxCategory",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedDate",
                table: "ProductType",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ModifiedDate",
                table: "ProductType",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserModifiedId",
                table: "ProductType",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedDate",
                table: "ProductStatus",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ModifiedDate",
                table: "ProductStatus",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserModifiedId",
                table: "ProductStatus",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedDate",
                table: "ProductManufacturer",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ModifiedDate",
                table: "ProductManufacturer",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserModifiedId",
                table: "ProductManufacturer",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedDate",
                table: "Product_Category_Mapping",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ModifiedDate",
                table: "Product_Category_Mapping",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserModifiedId",
                table: "Product_Category_Mapping",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedDate",
                table: "Product",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ModifiedDate",
                table: "Product",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserModifiedId",
                table: "Product",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedDate",
                table: "Category",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ModifiedDate",
                table: "Category",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserModifiedId",
                table: "Category",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedDate",
                table: "TaxCategory");

            migrationBuilder.DropColumn(
                name: "ModifiedDate",
                table: "TaxCategory");

            migrationBuilder.DropColumn(
                name: "UserModifiedId",
                table: "TaxCategory");

            migrationBuilder.DropColumn(
                name: "CreatedDate",
                table: "ProductType");

            migrationBuilder.DropColumn(
                name: "ModifiedDate",
                table: "ProductType");

            migrationBuilder.DropColumn(
                name: "UserModifiedId",
                table: "ProductType");

            migrationBuilder.DropColumn(
                name: "CreatedDate",
                table: "ProductStatus");

            migrationBuilder.DropColumn(
                name: "ModifiedDate",
                table: "ProductStatus");

            migrationBuilder.DropColumn(
                name: "UserModifiedId",
                table: "ProductStatus");

            migrationBuilder.DropColumn(
                name: "CreatedDate",
                table: "ProductManufacturer");

            migrationBuilder.DropColumn(
                name: "ModifiedDate",
                table: "ProductManufacturer");

            migrationBuilder.DropColumn(
                name: "UserModifiedId",
                table: "ProductManufacturer");

            migrationBuilder.DropColumn(
                name: "CreatedDate",
                table: "Product_Category_Mapping");

            migrationBuilder.DropColumn(
                name: "ModifiedDate",
                table: "Product_Category_Mapping");

            migrationBuilder.DropColumn(
                name: "UserModifiedId",
                table: "Product_Category_Mapping");

            migrationBuilder.DropColumn(
                name: "CreatedDate",
                table: "Product");

            migrationBuilder.DropColumn(
                name: "ModifiedDate",
                table: "Product");

            migrationBuilder.DropColumn(
                name: "UserModifiedId",
                table: "Product");

            migrationBuilder.DropColumn(
                name: "CreatedDate",
                table: "Category");

            migrationBuilder.DropColumn(
                name: "ModifiedDate",
                table: "Category");

            migrationBuilder.DropColumn(
                name: "UserModifiedId",
                table: "Category");
        }
    }
}
