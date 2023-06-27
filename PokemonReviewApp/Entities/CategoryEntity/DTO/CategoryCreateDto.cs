using System.ComponentModel.DataAnnotations;

namespace API.Models.CategoryEntity.DTO
{
    public class CategoryCreateDto
    {
        [Required]
        public string Name { get; set; }
    }
}
