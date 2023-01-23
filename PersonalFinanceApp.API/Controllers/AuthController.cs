using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PersonalFinanceApp.API.ViewModels;
using PersonalFinanceApp.Repository.Entities;
using PersonalFinanceApp.Service.Services.AuthService;
using System.Security.Cryptography;

namespace PersonalFinanceApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        private readonly IMapper _mapper;
        public AuthController(IAuthService authService, IMapper mapper)
        {
            _authService = authService;
            _mapper = mapper;
        }

        [HttpPost("Register")]
        public ActionResult<User> Register(RegisterViewModel register)
        {
            var user = _authService.GetUserByEmail(register.Email);
            if (user != null)
            {
                return BadRequest("Email already in use.");
            }
            if (!register.Password.Equals(register.ConfirmPassword))
            {
                return BadRequest("Password and confirm password is not the same.");
            }
            return _mapper.Map<User>(_authService.UserRegistration(register.Email, register.Password, register.ConfirmPassword));
        }

        [HttpPost("Login")]
        public ActionResult<string> Login(LoginViewModel login)
        {
            var user = _authService.GetUserByEmail(login.Email);
            if (user == null)
            {
                return BadRequest("User not found.");
            }
            if (!_authService.VerifyPasswordHash(login.Password, user.PasswordHash, user.PasswordSalt))
            {
                return BadRequest("Wrong password");
            }
            string accessToken = _authService.CreateToken(user);
            var refreshToken = GenerateRefreshToken();
            SetRefreshToken(refreshToken, user.UserId);
            return Ok(new { accessToken });
        }

        [HttpPost("RefreshToken")]
        public ActionResult<string> RefreshToken(string email)
        {
            if (!_authService.UserExists(email))
            {
                return BadRequest("User not exist");
            }
            var user = _authService.GetUserByEmail(email);
            var refreshToken = Request.Cookies["refreshToken"];
            if (!user.RefreshToken.Equals(refreshToken))
            {
                return Unauthorized("Invalid refresh token.");
            }
            else if (user.TokenExpires < DateTime.Now)
            {
                return Unauthorized("Token expired.");
            }
            string accessToken = _authService.CreateToken(user);
            var newRefreshToken = GenerateRefreshToken();
            var userId = user.UserId;
            SetRefreshToken(newRefreshToken, userId);
            return Ok(new { accessToken });
        }

        private static RefreshToken GenerateRefreshToken()
        {
            var refreshToken = new RefreshToken
            {
                Token = Convert.ToBase64String(RandomNumberGenerator.GetBytes(64)),
                Expires = DateTime.Now.AddDays(5),
                Created = DateTime.Now
            };
            return refreshToken;
        }

        private void SetRefreshToken(RefreshToken newRefreshToken, int userId)
        {
            var cookieOptions = new CookieOptions
            {
                HttpOnly = true,
                Expires = newRefreshToken.Expires,
            };
            Response.Cookies.Append("refreshToken", newRefreshToken.Token, cookieOptions);
            _authService.SetRefreshTokenToUser(userId, newRefreshToken.Token, newRefreshToken.Created, newRefreshToken.Expires);
        }
    }
}
