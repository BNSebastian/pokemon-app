using System.ComponentModel.DataAnnotations;

namespace API.Entities.ReviewerEntity.DTO
{
    public class ReviewerReadDto
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }
    }
}
