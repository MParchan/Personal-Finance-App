using PersonalFinanceApp.Repository.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PersonalFinanceApp.Repository.Repositories.ExpenditureCategoryRepository
{
    public interface IExpenditureCategoryRepository : IGenericRepository<ExpenditureCategory>
    {
        public IEnumerable<ExpenditureCategory> GetUserCategories(int id);
        public bool Exists(int id);
    }
}
