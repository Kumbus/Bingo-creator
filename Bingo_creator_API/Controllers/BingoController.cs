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
        [Route("Main")]
        public async Task<object> CreateMainBingo(BingoDTO bingoDto)
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

            var newBingo = new BingoDTO()
            {
                Id = bingo.Id,
                Name = bingo.Name,
                Width = bingo.Width,
                Height = bingo.Height,
                UserId = bingo.UserId,
            };

            return Ok(newBingo);
        }

        [HttpPost]
        public async Task<object> CreateBingo(BingoDTO bingoDto)
        {
            var bingo = new Bingo()
            {
                Name = bingoDto.Name,
                Width = bingoDto.Width,
                Height = bingoDto.Height,
                UserId = bingoDto.UserId,
                MainBingoId = bingoDto.MainBingoId
            };

            await _context.Bingo.AddAsync(bingo);
            await _context.SaveChangesAsync();

            var newBingo = new BingoDTO()
            {
                Id = bingo.Id,
                Name = bingo.Name,
                Width = bingo.Width,
                Height = bingo.Height,
                UserId = bingo.UserId,
                MainBingoId = bingo.MainBingoId
            };

            return Ok(newBingo);
        }

        [HttpGet]
        [Route("Summary/{id}")]
        public async Task<object> GetBingoToSummary(int id)
        {
            List<Bingo> bingo = new List<Bingo>();
            bingo = await _context.Bingo.Where(b => b.MainBingoId == id).ToListAsync();

            return Ok(bingo);
        }
    }
}
