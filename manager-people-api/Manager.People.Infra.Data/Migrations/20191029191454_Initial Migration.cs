using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Manager.People.Infra.Data.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "People",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    GUID = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(maxLength: 200, nullable: false),
                    CPF = table.Column<string>(maxLength: 50, nullable: false),
                    Email = table.Column<string>(maxLength: 200, nullable: false),
                    BirthDay = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_People", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Addresses",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    GUID = table.Column<Guid>(nullable: false),
                    ZipCode = table.Column<string>(maxLength: 100, nullable: false),
                    Street = table.Column<string>(maxLength: 255, nullable: false),
                    Neighborhood = table.Column<string>(maxLength: 255, nullable: false),
                    City = table.Column<string>(maxLength: 255, nullable: false),
                    State = table.Column<string>(maxLength: 100, nullable: false),
                    PersonId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Addresses", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Addresses_People_PersonId",
                        column: x => x.PersonId,
                        principalTable: "People",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "People",
                columns: new[] { "Id", "BirthDay", "CPF", "Email", "GUID", "Name" },
                values: new object[] { 1, new DateTime(1998, 5, 4, 0, 0, 0, 0, DateTimeKind.Unspecified), "45808039819", "ulisses@email.com.br", new Guid("6bd6e9de-ab0a-4273-8b51-f9892a29fbdc"), "Ulisses Maia" });

            migrationBuilder.InsertData(
                table: "People",
                columns: new[] { "Id", "BirthDay", "CPF", "Email", "GUID", "Name" },
                values: new object[] { 2, new DateTime(1953, 11, 13, 0, 0, 0, 0, DateTimeKind.Unspecified), "09519980563", "jose@email.com.br", new Guid("26ec2d3f-15fe-4dad-ab81-8682d850b3aa"), "José Pereira" });

            migrationBuilder.InsertData(
                table: "Addresses",
                columns: new[] { "Id", "City", "GUID", "Neighborhood", "PersonId", "State", "Street", "ZipCode" },
                values: new object[] { 3, "Campinas", new Guid("87349381-77f6-4f9b-8d3d-b8bfd41de39b"), "Centro", 1, "SP", "Rua Alberto Sarmento, nº 1999", "13060472" });

            migrationBuilder.InsertData(
                table: "Addresses",
                columns: new[] { "Id", "City", "GUID", "Neighborhood", "PersonId", "State", "Street", "ZipCode" },
                values: new object[] { 5, "São Paulo", new Guid("a1c6c742-1c22-4d13-9d8b-0736bd3eae17"), "Centro", 2, "SP", "Rua Esperança, nº 56", "15100222" });

            migrationBuilder.CreateIndex(
                name: "IX_Addresses_PersonId",
                table: "Addresses",
                column: "PersonId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Addresses");

            migrationBuilder.DropTable(
                name: "People");
        }
    }
}
