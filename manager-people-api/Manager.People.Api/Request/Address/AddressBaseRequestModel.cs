using Manager.People.Domain.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Manager.People.Api.Request.Address
{
    public class AddressBaseRequestModel
    {
        [Required]
        public string ZipCode { get;  set; }
        [Required]
        public string Street { get;  set; }
        [Required]
        public string Neighborhood { get;  set; }
        [Required]
        public string City { get;  set; }
        [Required]
        public string State { get;  set; }
        public int PersonId { get; set; }

        public static IEnumerable<AddressModel> CollectionModel(IEnumerable<AddressBaseRequestModel> addresses) =>
            addresses.Select(a => ParseToModel(a));

        private static  AddressModel ParseToModel(AddressBaseRequestModel address) =>
            AddressModel.New()
            .AddDataAddress(address.ZipCode, address.Street, address.Neighborhood, address.City, address.State)
            .AddPersonId(address.PersonId);
    }
}
