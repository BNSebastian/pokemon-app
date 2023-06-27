using API.Entities.OwnerEntity.model;
using AutoMapper;


namespace API.Entities.OwnerEntity.DTO
{
    public class PokemonProfiles : Profile
    {
        public PokemonProfiles()
        {
            CreateMap<Owner, OwnerReadDto>();
            CreateMap<OwnerReadDto, Owner>();

            CreateMap<Owner, OwnerCreateDto>();
            CreateMap<OwnerCreateDto, Owner>();
        }
    }
}
