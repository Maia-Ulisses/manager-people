using Manager.People.Api.Response.Address;
using Manager.People.Domain.Models;
using System;
using System.Collections.Generic;

namespace Manager.People.Api.Response.Person
{
    public class PersonResponseBaseModel
    {
        public string Name { get; protected set; }
        public string CPF { get; protected set; }
        public string Email { get; protected set; }
        public DateTime BirthDay { get; protected set; }
        public IEnumerable<AddressBaseResponseModel> Addresses { get; protected set; }
    }
}
