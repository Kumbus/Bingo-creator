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
        public async Task<Object> AddUser(UserDTO userDto)
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












        //[HttpPost]
        //public async Task<ActionResult> AddUser(UserDTO userDTO)
        //{
        //    User user = new User();



        //    _context.Users.Add(user);
        //    await _context.SaveChangesAsync();

        //    return Ok();
        //}

    

        

    }
}
