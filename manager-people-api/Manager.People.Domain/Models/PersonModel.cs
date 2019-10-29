using Manager.People.Domain.Entities;
using System;
using System.Collections.Generic;

namespace Manager.People.Domain.Models
{
    public class PersonModel
    {
        public string Name { get; protected set; }
        public string CPF { get; protected set; }
        public string Email { get; protected set; }
        public DateTime BirthDay { get; protected set; }
        public IEnumerable<AddressModel> Addresses { get; protected set; }

        public static PersonModel New(PersonEntity person) =>
            new PersonModel
            {
                Name = person.Name,
                CPF = person.CPF,
                Email = person.Email,
                BirthDay = person.BirthDay,
                Addresses = AddressModel.NewCollection(person?.Addresses)
            };
    }
}
