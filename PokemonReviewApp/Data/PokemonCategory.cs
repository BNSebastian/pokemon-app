using System.ComponentModel.DataAnnotations.Schema;
using API.Entities.PokemonEntity.model;
using API.Models.CategoryEntity.model;

namespace API.Data
{
    public class PokemonCategory
    {
        [ForeignKey("Pokemon")]
        public int PokemonId { get; set; }

        [ForeignKey("Category")]
        public int CategoryId { get; set; }

        public Pokemon Pokemon { get; set; }

        public Category Category { get; set; }
    }
}
