using AutoMapper;
using PersonalFinanceApp.Repository.Entities;
using PersonalFinanceApp.Service.DTOs;

namespace PersonalFinanceApp.API.ViewModels
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserDto>().ReverseMap();
            CreateMap<UserViewModel, UserDto>().ReverseMap();
        }
    }
}
