using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PersonalFinanceApp.API.ViewModels;
using PersonalFinanceApp.Service.DTOs;
using PersonalFinanceApp.Service.Services.AuthService;
using PersonalFinanceApp.Service.Services.IncomeService;

namespace PersonalFinanceApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IncomesController : ControllerBase
    {
        private readonly IIncomeService _incomeService;
        private readonly IAuthService _authService;
        private readonly IMapper _mapper;

        public IncomesController(IIncomeService incomeService, IAuthService authService, IMapper mapper)
        {
            _incomeService = incomeService;
            _authService = authService;
            _mapper = mapper;
        }

        [HttpGet]
        public ActionResult<IEnumerable<IncomeViewModel>> GetIncomes()
        {
            var results = _incomeService.GetIncomes();
            return _mapper.Map<List<IncomeViewModel>>(results);
        }

        [HttpGet("UserIncomes")]
        public ActionResult<IEnumerable<IncomeViewModel>> GetUserIncomes(string email)
        {
            if (!_authService.UserExists(email))
            {
                return BadRequest("User does not exist");
            }
            var results = _incomeService.GetUserIncomes(email);
            return _mapper.Map<List<IncomeViewModel>>(results);
        }

        [HttpGet("{id}")]
        public ActionResult<IncomeViewModel> GetIncome(int id)
        {
            var income = _incomeService.GetIncomeById(id);

            if (income == null)
            {
                return NotFound();
            }

            return _mapper.Map<IncomeViewModel>(income);
        }

        [HttpPut("{id}")]
        public IActionResult PutIncome(int id, IncomeViewModel income)
        {
            if (id != income.IncomeId)
            {
                return BadRequest("Wrong income id.");
            }
            try
            {
                _incomeService.UpdateIncome(_mapper.Map<IncomeDto>(income));
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_incomeService.IncomeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return NoContent();
        }

        [HttpPost]
        public ActionResult<IncomeViewModel> PostIncome(string email, IncomeViewModel income)
        {
            _incomeService.AddIncome(email, _mapper.Map<IncomeDto>(income));

            return CreatedAtAction("GetIncome", new { id = income.IncomeId }, income);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteIncome(int id)
        {
            var income = _incomeService.GetIncomeById(id);
            if (income == null)
            {
                return NotFound();
            }
            _incomeService.RemoveIncome(id);

            return NoContent();
        }
    }
}
