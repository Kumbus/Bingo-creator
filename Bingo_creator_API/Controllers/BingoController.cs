using Bingo_creator_API.DTOs;
using Bingo_creator_API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Bingo_creator_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BingoController : ControllerBase
    {

        private readonly BingoContext _context;
        public BingoController(BingoContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<object> CreateBingo(BingoDTO bingoDto)
        {
            var bingo = new Bingo()
            {
                Name = bingoDto.Name,
                Width = bingoDto.Width,
                Height = bingoDto.Height,
                UserId = bingoDto.UserId
            };

            await _context.Bingo.AddAsync(bingo);
            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}
