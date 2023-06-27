using System.ComponentModel.DataAnnotations;

namespace API.Entities.PokemonEntity.DTO
{
    public class PokemonReadDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public DateTime BirthDate { get; set; }
    }
}
