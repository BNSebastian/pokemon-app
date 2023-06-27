using API.Entities.CountryEntity.model;
using AutoMapper;


namespace API.Entities.CountryEntity.DTO
{
    public class OwnerProfiles : Profile
    {
        public OwnerProfiles()
        {
            CreateMap<Country, CountryReadDto>();
            CreateMap<CountryReadDto, Country>();

            CreateMap<Country, CountryCreateDto>();
            CreateMap<CountryCreateDto, Country>();
        }
    }
}
