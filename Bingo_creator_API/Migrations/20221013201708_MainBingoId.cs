using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Bingo_creator_API.Migrations
{
    public partial class MainBingoId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "MainBingoId",
                table: "Bingo",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MainBingoId",
                table: "Bingo");
        }
    }
}
