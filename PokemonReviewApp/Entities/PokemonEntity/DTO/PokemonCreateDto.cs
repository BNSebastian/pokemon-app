using System.ComponentModel.DataAnnotations;

namespace API.Entities.PokemonEntity.DTO
{
    public class PokemonCreateDto
    {
        [Required]
        public string Name { get; set; }
    }
}
