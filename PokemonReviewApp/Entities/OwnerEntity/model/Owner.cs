using API.Data;
using API.Entities.CountryEntity.model;
using System.ComponentModel.DataAnnotations;

namespace API.Entities.OwnerEntity.model
{
    public class Owner
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public string Gym { get; set; }

        public Country Country { get; set; }

        public ICollection<PokemonOwner> PokemonOwners { get; set; }
    }
}
