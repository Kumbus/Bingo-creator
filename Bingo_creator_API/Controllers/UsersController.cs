using Bingo_creator_API.DTOs;
using Bingo_creator_API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Bingo_creator_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly BingoContext _context;
        private UserManager<User> _userManager;
        private SignInManager<User> _signInManager;
        private readonly IConfiguration _configuration;
        public UsersController(BingoContext context, UserManager<User> userManager, SignInManager<User> signInManager, IConfiguration configuration)
        {
            _context = context;
            _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;
        }


        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> AddUser(UserDTO userDto)
        {
            var user = new User()
            {
                UserName = userDto.UserName,
                Email = userDto.Email,
            };

            try
            {
                var result = await _userManager.CreateAsync(user, userDto.Password);
                return Ok(result);
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        [HttpGet]
        [Route("Register/{email}")]    
        public async Task<IActionResult> GetUserToRegister([FromRoute] string email)
        {
            var user = await _userManager.FindByEmailAsync(email);

            if (user == null)
                return Ok();

            return BadRequest("nie ok");
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> GetUserToLogin([FromBody] UserDTO loggingUser)
        {
            var user = await _userManager.FindByEmailAsync(loggingUser.Email);

            if (user == null)
                return BadRequest("Bad email");

            if (await _userManager.CheckPasswordAsync(user, loggingUser.Password))
            {
                var authClaims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.UserName),
                    new Claim(ClaimTypes.Email, user.Email),
                };

                var token = CreateToken(authClaims);

                var jwt = new JwtSecurityTokenHandler().WriteToken(token);

                return Ok(jwt);
            }
                

            return BadRequest("Wrong password");

        }

        private JwtSecurityToken CreateToken(List<Claim> authClaims)
        {
            var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

            var token = new JwtSecurityToken(
                issuer: _configuration["JWT:ValidIssuer"],
                audience: _configuration["JWT:ValidAudience"],
                expires: DateTime.Now.AddSeconds(30),
                claims: authClaims,
                signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                );

            return token;
        }

    }
}
