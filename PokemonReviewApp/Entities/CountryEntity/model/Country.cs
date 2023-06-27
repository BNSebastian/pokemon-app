using API.Entities.OwnerEntity.model;
using System.ComponentModel.DataAnnotations;

namespace API.Entities.CountryEntity.model
{
    public class Country
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public ICollection<Owner> Owners { get; set; }
    }
}
