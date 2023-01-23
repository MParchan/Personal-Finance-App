namespace PersonalFinanceApp.API.ViewModels
{
    public class IncomeViewModel
    {
        public int IncomeId { get; set; }
        public int IncomeCategoryId { get; set; }
        public int UserId { get; set; }
        public string Price { get; set; }
        public string Comment { get; set; }
    }
}
