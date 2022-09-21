using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Bingo_creator_API.Migrations
{
    public partial class UserChange2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Bingo",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Bingo");
        }
    }
}
