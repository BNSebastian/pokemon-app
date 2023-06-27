using System.ComponentModel.DataAnnotations;

namespace PokemonReviewApp.Authentication.Dto
{
    public class LoginDTO
    {
        public string UserName { get; set; }

        public string Password { get; set; }
    }
}
