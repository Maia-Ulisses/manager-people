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

        public static PersonEntity New(string name, string cpf, string email, DateTime birthDate) =>
            new PersonEntity
            {
                Name = name,
                CPF = cpf,
                Email = email,
                BirthDay = birthDate
            };

        public PersonEntity AddAddress(IEnumerable<AddressEntity> addresses)
        {
            Addresses = addresses;
            return this;
        }

    }
}
