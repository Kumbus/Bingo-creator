using Microsoft.EntityFrameworkCore;

namespace Bingo_creator_API.Models
{
    public class BingoContext : DbContext
    {
        public BingoContext(DbContextOptions<BingoContext> options) : base(options)
        { }

        public DbSet<Bingo> Bingo { get; set; }
        public DbSet<Word> Words { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Word>()
                .Property(w => w.IsDeleted)
                .HasDefaultValue(false);

            modelBuilder.Entity<Bingo>()
                .Property(b => b.IsDeleted)
                .HasDefaultValue(false);
        }
    }
}
