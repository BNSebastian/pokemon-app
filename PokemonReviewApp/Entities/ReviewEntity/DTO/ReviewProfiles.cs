using API.Entities.ReviewEntity.model;
using AutoMapper;


namespace API.Entities.ReviewEntity.DTO
{
    public class ReviewerProfiles : Profile
    {
        public ReviewerProfiles()
        {
            CreateMap<Review, ReviewReadDto>();
            CreateMap<ReviewReadDto, Review>();

            CreateMap<Review, ReviewCreateDto>();
            CreateMap<ReviewCreateDto, Review>();
        }
    }
}
