using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Bingo_creator_API.Migrations
{
    public partial class UserChange : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            //migrationBuilder.DropForeignKey(
            //    name: "FK_Bingo_Users_UserId",
            //    table: "Bingo");

            //migrationBuilder.DropTable(
            //    name: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Bingo_UserId",
                table: "Bingo");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Bingo");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Bingo",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Bingo_UserId",
                table: "Bingo",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Bingo_Users_UserId",
                table: "Bingo",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
