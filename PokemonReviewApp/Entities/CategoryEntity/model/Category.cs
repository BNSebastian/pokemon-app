using System.ComponentModel.DataAnnotations;
using API.Data;

namespace API.Models.CategoryEntity.model
{
    public class Category
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public ICollection<PokemonCategory> PokemonCategories { get; set; }
    }
}
