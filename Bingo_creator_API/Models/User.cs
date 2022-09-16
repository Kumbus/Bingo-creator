using Microsoft.AspNetCore.Identity;

namespace Bingo_creator_API.Models
{
    public class User : IdentityUser
    {
        public List<Bingo> Bingo { get; set; }

    }
}
