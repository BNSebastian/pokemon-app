using System.ComponentModel.DataAnnotations;

namespace API.Entities.CountryEntity.DTO
{
    public class CountryCreateDto
    {
        [Required]
        public string Name { get; set; }
    }
}
