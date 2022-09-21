using Bingo_creator_API.DTOs;
using Bingo_creator_API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Bingo_creator_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly BingoContext _context;
        private UserManager<User> _userManager;
        private SignInManager<User> _signInManager;
        public UsersController(BingoContext context, UserManager<User> userManager, SignInManager<User> signInManager)
        {
            _context = context;
            _userManager = userManager;
            _signInManager = signInManager;
        }


        [HttpPost]
        [Route("Register")]
        public async Task<object> AddUser(UserDTO userDto)
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
        public async Task<object> GetUserToRegister([FromRoute] string email)
        {
            var user = await _userManager.FindByEmailAsync(email);

            if (user == null)
                return Ok();

            return BadRequest("nie ok");
        }

        [HttpGet]
        [Route("login/{email}/{password}")]
        public async Task<object> GetUserToLogin([FromRoute] string email, string password)
        {
            var user = await _userManager.FindByEmailAsync(email);

            if (user == null)
                return BadRequest("Bad email");

            if (_userManager.CheckPasswordAsync(user, password).Result)
                return user;

            return BadRequest("Wrong password");

        }

    }
}
