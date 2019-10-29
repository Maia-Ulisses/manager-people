using Manager.People.Api.Response.Address;
using Manager.People.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Manager.People.Api.Response.Person
{
    public class PersonGetAllResponseModel : PersonResponseBaseModel
    {
        public static PersonGetAllResponseModel New(PersonModel person) => ParseModel(person);            

        public static IEnumerable<PersonGetAllResponseModel> New(IEnumerable<PersonModel> people) =>
            people.Select(p => ParseModel(p));

        private static PersonGetAllResponseModel ParseModel(PersonModel person) =>
             new PersonGetAllResponseModel
             {
                 Name = person.Name,
                 CPF = person.CPF,
                 Email = person.Email,
                 BirthDay = person.BirthDay,
                 Addresses = new List<AddressBaseResponseModel>()
             };

    }
}
