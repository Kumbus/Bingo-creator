namespace Bingo_creator_API.DTOs
{
    public class BingoDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Height { get; set; }
        public int Width { get; set; }
        public string? UserId { get; set; }

        public int? MainBingoId { get; set; }
    }
}
