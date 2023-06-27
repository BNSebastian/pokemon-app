using System.ComponentModel.DataAnnotations;

namespace API.Entities.OwnerEntity.DTO
{
    public class OwnerCreateDto
    {
        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public string Gym { get; set; }
    }
}
