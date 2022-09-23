using Bingo_creator_API.DTOs;
using Bingo_creator_API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
        public async Task<object> CreateWord(WordDTO wordDto)
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

        [HttpGet]
        public async Task<object> GetWords()
        {
            List<Word> words = new List<Word>();
            words = await _context.Words.Where(w => w.IsDeleted == false).ToListAsync();

            return Ok(words);
        }


        [HttpPut]
        public async Task<object> UpdateWord(WordDTO newWord)
        {
            var word = await _context.Words.FindAsync(newWord.Id);

            word.Name = newWord.Name;
            word.XPosition = newWord.XPosition;
            word.YPosition = newWord.YPosition;
            word.BingoId = newWord.BingoId;

            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<object> DeleteWord(int id)
        {
            var word = await _context.Words.FindAsync(id);

            word.IsDeleted = true;

            await _context.SaveChangesAsync();

            return Ok();
        }

    }
}
