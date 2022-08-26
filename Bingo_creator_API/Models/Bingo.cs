namespace Bingo_creator_API.Models
{
    public class Bingo
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Height { get; set; }
        public int Width { get; set; }

        public User User { get; set; }
        public List<Word> Words { get; set; }


    }
}
