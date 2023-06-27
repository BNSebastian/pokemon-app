using API.Entities.OwnerEntity.model;
using API.Entities.PokemonEntity.model;

namespace API.Data
{
    public class PokemonOwner
    {
        public int PokemonId { get; set; }
        public int OwnerId { get; set; }
        public Pokemon Pokemon { get; set; }
        public Owner Owner { get; set; }
    }
}
