using System.ComponentModel.DataAnnotations;

namespace API.Entities.ReviewEntity.DTO
{
    public class ReviewCreateDto
    {
        [Required]
        public string Title { get; set; }

        [Required]
        public string Text { get; set; }

        [Required]
        public int Rating { get; set; }
    }
}
