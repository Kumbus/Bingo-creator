using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Bingo_creator_API.Migrations
{
    public partial class BingoId2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Words_Bingo_BingoId",
                table: "Words");

            migrationBuilder.AlterColumn<int>(
                name: "BingoId",
                table: "Words",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Words_Bingo_BingoId",
                table: "Words",
                column: "BingoId",
                principalTable: "Bingo",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Words_Bingo_BingoId",
                table: "Words");

            migrationBuilder.AlterColumn<int>(
                name: "BingoId",
                table: "Words",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Words_Bingo_BingoId",
                table: "Words",
                column: "BingoId",
                principalTable: "Bingo",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
