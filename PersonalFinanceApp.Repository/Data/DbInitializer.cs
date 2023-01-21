using PersonalFinanceApp.Repository.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace PersonalFinanceApp.Repository.Data
{
    public class DbInitializer
    {
        public static void Initialize(AppDBContext context)
        {
            context.Database.EnsureCreated();

            if (context.Users.Any())
            {
                return;
            }

            var userHMAC = new HMACSHA512();
            var users = new User[]
            {
                new User
                {
                    Email="user@user.pl",
                    PasswordHash=userHMAC.ComputeHash(Encoding.UTF8.GetBytes("User1234")),
                    PasswordSalt = userHMAC.Key
                }
            };
            foreach (User u in users)
            {
                context.Users.Add(u);
            }
            context.SaveChanges();

            var incomeCategories = new IncomeCategory[]
            {
                new IncomeCategory
                {
                    UserId=-1,
                    Name="Salary"
                },
                new IncomeCategory
                {
                    UserId=-1,
                    Name="Pension"
                },
                new IncomeCategory
                {
                    UserId=-1,
                    Name="Social benefits"
                },
                new IncomeCategory
                {
                    UserId=-1,
                    Name="Own business"
                },
                new IncomeCategory
                {
                    UserId=-1,
                    Name="Property rental"
                },
                new IncomeCategory
                {
                    UserId=-1,
                    Name="Investments"
                },
                new IncomeCategory
                {
                    UserId=-1,
                    Name="Others"
                },
            };
            foreach (IncomeCategory ic in incomeCategories)
            {
                context.IncomeCategories.Add(ic);
            }
            context.SaveChanges();

            var expenditureCategory = new ExpenditureCategory[]
            {
                new ExpenditureCategory
                {
                    UserId=-1,
                    Name="House and bills"
                },
                new ExpenditureCategory
                {
                    UserId=-1,
                    Name="Food"
                },
                new ExpenditureCategory
                {
                    UserId=-1,
                    Name="Transport"
                },
                new ExpenditureCategory
                {
                    UserId=-1,
                    Name="Clothes"
                },
                new ExpenditureCategory
                {
                    UserId=-1,
                    Name="Health and beauty"
                },
                new ExpenditureCategory
                {
                    UserId=-1,
                    Name="Others"
                },
            };
            foreach (ExpenditureCategory ec in expenditureCategory)
            {
                context.ExpenditureCategories.Add(ec);
            }
            context.SaveChanges();
        }
    }
}
