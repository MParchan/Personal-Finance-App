using PersonalFinanceApp.Repository.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PersonalFinanceApp.Repository.Repositories.ExpenditureRepository
{
    public interface IExpenditureRepository : IGenericRepository<Expenditure>
    {
        public IEnumerable<Expenditure> GetUserExpenditures(int id);
        public bool Exists(int id);
    }
}
