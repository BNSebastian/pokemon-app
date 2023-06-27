using System.ComponentModel.DataAnnotations;

namespace PokemonReviewApp.Authentication.Dto
{
    public class RegisterDTO
    {
        [Required]
        public string UserName { get; set; }

        [Required]
        [MinLength(5)]
        public string Password { get; set; }
    }
}
