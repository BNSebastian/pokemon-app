using API.Entities.ReviewEntity.model;
using API.Entities.ReviewerEntity.model;
using AutoMapper;


namespace API.Entities.ReviewerEntity.DTO
{
    public class ReviewerProfiles : Profile
    {
        public ReviewerProfiles()
        {
            CreateMap<Reviewer, ReviewerReadDto>();
            CreateMap<ReviewerReadDto, Reviewer>();

            CreateMap<Reviewer, ReviewerCreateDto>();
            CreateMap<ReviewerCreateDto, Reviewer>();
        }
    }
}
