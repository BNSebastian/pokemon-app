using System.ComponentModel.DataAnnotations;

namespace API.Entities.ReviewerEntity.DTO
{
    public class ReviewerCreateDto
    {
        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }
    }
}
