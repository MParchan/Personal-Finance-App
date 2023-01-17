using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PersonalFinanceApp.Repository.Entities
{
    public class Expenditure
    {
        [Key]
        public int ExpenditureId { get; set; }
        public int ExpenditureCategoryId { get; set; }
        public int UserId { get; set; }
        public string Price { get; set; }
        public string Comment { get; set; }

        public virtual ExpenditureCategory ExpenditureCategory { get; set; }
        public virtual User User { get; set; }
    }
}
