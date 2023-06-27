using API.Models.CategoryEntity.DTO;
using API.Models.CategoryEntity.model;
using AutoMapper;


namespace PokemonReviewApp.Helper
{
    public class CountryProfiles : Profile
    {
        public CountryProfiles()
        {
            CreateMap<Category, CategoryReadDto>();
            CreateMap<CategoryReadDto, Category>();

            CreateMap<Category, CategoryCreateDto>();
            CreateMap<CategoryCreateDto, Category>();
        }
    }
}
