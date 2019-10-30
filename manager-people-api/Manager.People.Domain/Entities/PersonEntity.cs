using Manager.People.Domain.Models;
using System;
using System.Collections.Generic;

namespace Manager.People.Domain.Entities
{
    public class PersonEntity : Entity
    {
        public string Name { get; protected set; }
        public string CPF { get; protected set; }
        public string Email { get; protected set; }
        public DateTime BirthDay { get; protected set; }
        public IEnumerable<AddressEntity> Addresses { get; protected set; }

        public static PersonEntity New(PersonModel person) =>
          new PersonEntity
          {
              Id = person.Id,
              Name = person.Name,
              CPF = person.CPF,
              Email = person.Email,
              BirthDay = person.BirthDay,
          };

        public PersonEntity UpdateEntity(PersonModel person)
        {
            Name = person.Name;
            CPF = person.CPF;
            Email = person.Email;
            BirthDay = person.BirthDay;
            return this;
        }
        public static PersonEntity New(int id) => new PersonEntity { Id = id  };
        public PersonEntity AddDataProfile(string name, string cpf, string email, DateTime birthDate)
        {
            Name = name;
            CPF = cpf;
            Email = email;
            BirthDay = birthDate;
            return this;
        }

        public PersonEntity AddAddress(IEnumerable<AddressEntity> addresses)
        {
            Addresses = addresses;
            return this;
        }

    }
}
