using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PersonalFinanceApp.API.ViewModels;
using PersonalFinanceApp.Repository.Entities;
using PersonalFinanceApp.Service.DTOs;
using PersonalFinanceApp.Service.Services.AuthService;
using PersonalFinanceApp.Service.Services.IncomeCategoryService;

namespace PersonalFinanceApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IncomeCategoriesController : Controller
    {
        private readonly IIncomeCategoryService _incomeCategoryService;
        private readonly IAuthService _authService;
        private readonly IMapper _mapper;

        public IncomeCategoriesController(IIncomeCategoryService incomeCategoryService, IAuthService authService, IMapper mapper)
        {
            _incomeCategoryService = incomeCategoryService;
            _authService = authService;
            _mapper = mapper;
        }

        [HttpGet]
        public ActionResult<IEnumerable<IncomeCategoryViewModel>> GetIncomeCategories()
        {
            var results = _incomeCategoryService.GetIncomeCategories();
            return _mapper.Map<List<IncomeCategoryViewModel>>(results);
        }

        [HttpGet("UserIncomeCategories")]
        public ActionResult<IEnumerable<IncomeCategoryViewModel>> GetUserIncomeCategories(string email)
        {
            if (!_authService.UserExists(email))
            {
                return BadRequest("User does not exist");
            }
            var results = _incomeCategoryService.GetUserIncomeCategories(email);
            return _mapper.Map<List<IncomeCategoryViewModel>>(results);
        }

        [HttpGet("{id}")]
        public ActionResult<IncomeCategoryViewModel> GetIncomeCategory(int id)
        {
            var brand = _incomeCategoryService.GetIncomeCategoryById(id);

            if (brand == null)
            {
                return NotFound();
            }

            return _mapper.Map<IncomeCategoryViewModel>(brand);
        }

        [HttpPut("{id}")]
        public IActionResult PutIncomeCategory(int id, IncomeCategoryViewModel incomeCategory)
        {
            if (id != incomeCategory.IncomeCategoryId)
            {
                return BadRequest("Wrong income category id.");
            }
            try
            {
                _incomeCategoryService.UpdateIncomeCategory(_mapper.Map<IncomeCategoryDto>(incomeCategory));
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_incomeCategoryService.IncomeCategoryExists(id))
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
        public ActionResult<IncomeCategoryViewModel> PostIncomeCategory(IncomeCategoryViewModel incomeCategory)
        {
            _incomeCategoryService.AddIncomeCategory(_mapper.Map<IncomeCategoryDto>(incomeCategory));

            return CreatedAtAction("GetIncomeCategory", new { id = incomeCategory.IncomeCategoryId }, incomeCategory);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteIncomeCategory(int id)
        {
            var brand = _incomeCategoryService.GetIncomeCategoryById(id);
            if (brand == null)
            {
                return NotFound();
            }
            _incomeCategoryService.RemoveIncomeCategory(id);

            return NoContent();
        }
    }
}
