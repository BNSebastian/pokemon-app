using PokemonReviewApp.Authentication.Entity;

namespace PokemonReviewApp.Authentication.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}
