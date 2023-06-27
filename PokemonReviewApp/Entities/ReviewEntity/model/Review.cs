using API.Entities.PokemonEntity.model;
using API.Entities.ReviewerEntity.model;
using System.ComponentModel.DataAnnotations;

namespace API.Entities.ReviewEntity.model
{
    public class Review
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Text { get; set; }

        [Required]
        public int Rating { get; set; }

        public Reviewer Reviewer { get; set; }

        public Pokemon Pokemon { get; set; }
    }
}
