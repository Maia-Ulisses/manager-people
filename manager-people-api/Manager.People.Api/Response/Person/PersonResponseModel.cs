using Manager.People.Api.Response.Address;
using Manager.People.Domain.Models;

namespace Manager.People.Api.Response.Person
{
    public class PersonResponseModel : PersonResponseBaseModel
    {
        public static PersonResponseModel New(PersonModel person) =>
           new PersonResponseModel
           {
               Id = person.Id,
               Name = person.Name,
               CPF = person.CPF,
               Email = person.Email,
               BirthDay = person.BirthDay,
               Addresses = AddressBaseResponseModel.NewCollection(person.Addresses)
           };
    }
}