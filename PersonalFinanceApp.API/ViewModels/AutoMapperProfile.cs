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

            CreateMap<IncomeCategory, IncomeCategoryDto>().ReverseMap();
            CreateMap<IncomeCategoryViewModel, IncomeCategoryDto>().ReverseMap();

            CreateMap<ExpenditureCategory, ExpenditureCategoryDto>().ReverseMap();
            CreateMap<ExpenditureCategoryViewModel, ExpenditureCategoryDto>().ReverseMap();
        }
    }
}
