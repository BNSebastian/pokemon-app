using System.ComponentModel.DataAnnotations;
using API.Data;
using API.Entities.ReviewEntity.model;

namespace API.Entities.PokemonEntity.model
{
    public class Pokemon
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public DateTime BirthDate { get; set; } = DateTime.Now;

        public ICollection<Review> Reviews { get; set; }

        public ICollection<PokemonOwner> PokemonOwners { get; set; }

        public ICollection<PokemonCategory> PokemonCategories { get; set; }
    }
}
