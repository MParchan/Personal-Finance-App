namespace PersonalFinanceApp.API.ViewModels
{
    public class ExpenditureViewModel
    {
        public int ExpenditureId { get; set; }
        public int ExpenditureCategoryId { get; set; }
        public int UserId { get; set; }
        public string Price { get; set; }
        public string Comment { get; set; }
    }
}
