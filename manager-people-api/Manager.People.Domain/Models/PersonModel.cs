﻿using Manager.People.Domain.Entities;
using System;
using System.Collections.Generic;

namespace Manager.People.Domain.Models
{
    public class PersonModel
    {
        public int Id { get; protected set; }
        public string Name { get; protected set; }
        public string CPF { get; protected set; }
        public string Email { get; protected set; }
        public DateTime BirthDay { get; protected set; }
        public IEnumerable<AddressModel> Addresses { get; protected set; }
        public static PersonModel New(PersonEntity person) =>
           new PersonModel
           {
               Id = person.Id,
               Name = person.Name,
               CPF = person.CPF,
               Email = person.Email,
               BirthDay = person.BirthDay,
               Addresses = AddressModel.NewCollection(person?.Addresses)
           };
        public static PersonModel New(int id) => new PersonModel { Id = id };
        public PersonModel AddDataPerson(string name, string cpf, string email, DateTime birthday)
        {
            Name = name;
            CPF = cpf;
            Email = email;
            BirthDay = birthday;
            return this;
        }
         
       public PersonModel AddAddresses(IEnumerable<AddressModel> addresses)
        {
            Addresses = addresses;
            return this;
        }
    }
}
