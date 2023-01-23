using PersonalFinanceApp.Repository.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PersonalFinanceApp.Repository.Repositories.ExpenditureRepository
{
    public class ExpenditureRepository : GenericRepository<Expenditure>, IExpenditureRepository
    {
        private readonly AppDBContext _context;
        public ExpenditureRepository(AppDBContext context) : base(context)
        {
            _context = context;
        }
        public IEnumerable<Expenditure> GetUserExpenditures(int id)
        {
            return _context.Expenditures.Where(i => i.UserId == -1 || i.UserId == id);
        }
        public bool Exists(int id)
        {
            return _context.Expenditures.Any(i => i.ExpenditureId == id);
        }
    }
}
