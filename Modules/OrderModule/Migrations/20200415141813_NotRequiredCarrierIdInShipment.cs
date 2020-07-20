using Microsoft.EntityFrameworkCore.Migrations;

namespace OrderModule.Migrations
{
    public partial class NotRequiredCarrierIdInShipment : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Shipment_Carrier_CarrierId",
                table: "Shipment");

            migrationBuilder.AlterColumn<int>(
                name: "CarrierId",
                table: "Shipment",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Shipment_Carrier_CarrierId",
                table: "Shipment",
                column: "CarrierId",
                principalTable: "Carrier",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Shipment_Carrier_CarrierId",
                table: "Shipment");

            migrationBuilder.AlterColumn<int>(
                name: "CarrierId",
                table: "Shipment",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Shipment_Carrier_CarrierId",
                table: "Shipment",
                column: "CarrierId",
                principalTable: "Carrier",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
