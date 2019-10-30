using Manager.People.Api.Request.Address;
using Manager.People.Domain.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Manager.People.Api.Request.Person
{
    public class PersonRequestBaseModel
    {
        [Required]
        public int Id { get;  set; }
        [Required]
        [StringLength(255)]
        public string Name { get;  set; }
        [Required]
        public string CPF { get;  set; }
        [Required]
        [StringLength(255)]
        public string Email { get;  set; }
        [Required]
        public DateTime BirthDay { get;  set; }
        public IEnumerable<AddressBaseRequestModel> Addresses { get;  set; }

        public PersonModel ToModel() =>
            PersonModel.New(Id)
                        .AddDataPerson(Name, CPF, Email, BirthDay)
                        .AddAddresses(AddressBaseRequestModel.CollectionModel(Addresses));

    }
}
