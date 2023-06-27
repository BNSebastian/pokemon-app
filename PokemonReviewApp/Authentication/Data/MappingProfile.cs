using AutoMapper;
using PokemonReviewApp.Authentication.Dto;
using PokemonReviewApp.Authentication.Entity;

namespace PokemonReviewApp.Authentication.Data
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<AppUser, RegisterDTO>();
            CreateMap<RegisterDTO, AppUser>();
        }
    }
}