namespace Bingo_creator_API.Models
{
    public class Word
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int XPosition { get; set; }
        public int YPosition { get; set; }
        public int? BingoId { get; set; }
        public bool IsDeleted { get; set; }

        public Bingo? Bingo { get; set; }
    }
}
