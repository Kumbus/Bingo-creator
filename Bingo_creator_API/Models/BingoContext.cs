using Microsoft.EntityFrameworkCore;

namespace Bingo_creator_API.Models
{
    public class BingoContext : DbContext
    {
        public BingoContext(DbContextOptions<BingoContext> options) : base(options)
        { }

        public DbSet<Bingo> Bingo { get; set; }
        public DbSet<Word> Words { get; set; }
        public DbSet<User> Users { get; set; }


    }
}
