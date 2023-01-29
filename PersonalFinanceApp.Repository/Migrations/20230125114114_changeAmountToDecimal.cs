using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PersonalFinanceApp.Repository.Migrations
{
    public partial class changeAmountToDecimal : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Expenditures_ExpenditureCategories_ExpenditureCategoryId",
                table: "Expenditures");

            migrationBuilder.DropForeignKey(
                name: "FK_Expenditures_Users_UserId",
                table: "Expenditures");

            migrationBuilder.DropForeignKey(
                name: "FK_Incomes_IncomeCategories_IncomeCategoryId",
                table: "Incomes");

            migrationBuilder.DropForeignKey(
                name: "FK_Incomes_Users_UserId",
                table: "Incomes");

            migrationBuilder.DropIndex(
                name: "IX_Incomes_IncomeCategoryId",
                table: "Incomes");

            migrationBuilder.DropIndex(
                name: "IX_Incomes_UserId",
                table: "Incomes");

            migrationBuilder.DropIndex(
                name: "IX_Expenditures_ExpenditureCategoryId",
                table: "Expenditures");

            migrationBuilder.DropIndex(
                name: "IX_Expenditures_UserId",
                table: "Expenditures");

            migrationBuilder.DropColumn(
                name: "Price",
                table: "Incomes");

            migrationBuilder.DropColumn(
                name: "Price",
                table: "Expenditures");

            migrationBuilder.AddColumn<decimal>(
                name: "Amount",
                table: "Incomes",
                type: "decimal(18,2)",
                precision: 18,
                scale: 2,
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "Amount",
                table: "Expenditures",
                type: "decimal(18,2)",
                precision: 18,
                scale: 2,
                nullable: false,
                defaultValue: 0m);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Amount",
                table: "Incomes");

            migrationBuilder.DropColumn(
                name: "Amount",
                table: "Expenditures");

            migrationBuilder.AddColumn<string>(
                name: "Price",
                table: "Incomes",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Price",
                table: "Expenditures",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Incomes_IncomeCategoryId",
                table: "Incomes",
                column: "IncomeCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Incomes_UserId",
                table: "Incomes",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Expenditures_ExpenditureCategoryId",
                table: "Expenditures",
                column: "ExpenditureCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Expenditures_UserId",
                table: "Expenditures",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Expenditures_ExpenditureCategories_ExpenditureCategoryId",
                table: "Expenditures",
                column: "ExpenditureCategoryId",
                principalTable: "ExpenditureCategories",
                principalColumn: "ExpenditureCategoryId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Expenditures_Users_UserId",
                table: "Expenditures",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Incomes_IncomeCategories_IncomeCategoryId",
                table: "Incomes",
                column: "IncomeCategoryId",
                principalTable: "IncomeCategories",
                principalColumn: "IncomeCategoryId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Incomes_Users_UserId",
                table: "Incomes",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
