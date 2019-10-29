using Manager.People.Api.Response.Address;
using Manager.People.Domain.Models;

namespace Manager.People.Api.Response.Person
{
    public class PersonGetByIdResponseModel : PersonResponseBaseModel
    {
        public static PersonGetByIdResponseModel New(PersonModel person) =>
           new PersonGetByIdResponseModel
           {
               Name = person.Name,
               CPF = person.CPF,
               Email = person.Email,
               BirthDay = person.BirthDay,
               Addresses = AddressBaseResponseModel.NewCollection(person.Addresses)
           };
    }
}