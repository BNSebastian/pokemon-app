using API.Entities.OwnerEntity.model;
using API.Entities.PokemonEntity.model;
using AutoMapper;


namespace API.Entities.PokemonEntity.DTO
{
    public class PokemonProfiles : Profile
    {
        public PokemonProfiles()
        {
            CreateMap<Pokemon, PokemonReadDto>();
            CreateMap<PokemonReadDto, Pokemon>();

            CreateMap<Pokemon, PokemonCreateDto>();
            CreateMap<PokemonCreateDto, Pokemon>();
        }
    }
}
