namespace Bingo_creator_API.DTOs
{
    public class WordDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int XPosition { get; set; }
        public int YPosition { get; set; }

        public int BingoId { get; set; }
    }
}
