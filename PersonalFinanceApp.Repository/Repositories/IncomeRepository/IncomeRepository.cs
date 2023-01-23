﻿using PersonalFinanceApp.Repository.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PersonalFinanceApp.Repository.Repositories.IncomeRepository
{
    public class IncomeRepository : GenericRepository<Income>, IIncomeRepository
    {
        private readonly AppDBContext _context;
        public IncomeRepository(AppDBContext context) : base(context)
        {
            _context = context;
        }
        public IEnumerable<Income> GetUserIncomes(int id)
        {
            return _context.Incomes.Where(i => i.UserId == -1 || i.UserId == id);
        }
        public bool Exists(int id)
        {
            return _context.Incomes.Any(i => i.IncomeId == id);
        }
    }
}
