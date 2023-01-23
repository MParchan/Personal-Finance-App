using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PersonalFinanceApp.Service.DTOs
{
    public class ExpenditureDto
    {
        public int ExpenditureId { get; set; }
        public int ExpenditureCategoryId { get; set; }
        public int UserId { get; set; }
        public string Price { get; set; }
        public string Comment { get; set; }
    }
}
