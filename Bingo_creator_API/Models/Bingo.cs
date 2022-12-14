namespace Bingo_creator_API.Models
{
    public class Bingo
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Height { get; set; }
        public int Width { get; set; }

        public string? UserId { get; set; }
        public int? MainBingoId { get; set; }

        public bool IsDeleted { get; set; }
        public List<Word> Words { get; set; }


    }
}
