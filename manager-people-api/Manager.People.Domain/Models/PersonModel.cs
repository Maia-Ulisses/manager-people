using System;
using System.Collections.Generic;
using System.Text;

namespace Manager.People.Domain.Models
{
    public class PersonModel
    {
        public string Name { get; protected set; }
        public string CPF { get; protected set; }
        public string Email { get; protected set; }
        public DateTime BirthDay { get; protected set; }
        public IEnumerable<AddressModel> Addresses { get; protected set; }
    }
}
