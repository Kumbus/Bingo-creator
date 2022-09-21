using Bingo_creator_API.DTOs;
using Bingo_creator_API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Bingo_creator_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WordsController : ControllerBase
    {

        private readonly BingoContext _context;
        public WordsController(BingoContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<object> CreateBingo(WordDTO wordDto)
        {
            var word = new Word()
            {
                Name = wordDto.Name,
                XPosition = wordDto.XPosition,
                YPosition = wordDto.YPosition,
                BingoId = wordDto.BingoId,
            };

            await _context.Words.AddAsync(word);
            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}
