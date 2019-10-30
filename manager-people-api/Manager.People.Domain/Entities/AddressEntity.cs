using Manager.People.Domain.Models;
using System.Collections.Generic;
using System.Linq;

namespace Manager.People.Domain.Entities
{
    public class AddressEntity : Entity
    {
        public string ZipCode { get; protected set; }
        public string Street { get; protected set; }
        public string Neighborhood { get; protected set; }
        public string City { get; protected set; }
        public string State { get; protected set; }
        public int PersonId { get; protected set; }
        public PersonEntity PersonEntity { get; set; }

        public static AddressEntity New(int id) => new AddressEntity { Id = id };
        public  AddressEntity AddDataAddress(string zipCode, string street, string neighborhood, string city, string state)
        {
            ZipCode = zipCode;
            Street = street;
            Neighborhood = neighborhood;
            City = city;
            State = state;
            return this;
        }
        public AddressEntity AddPersonId(int id)
        {
            PersonId = id;
            return this;
        }
        public static IEnumerable<AddressEntity> NewCollection(IEnumerable<AddressModel> addresses, PersonEntity person) =>
           addresses?.Select(a => ParseModel(a, person));
        private static AddressEntity ParseModel(AddressModel address, PersonEntity person) =>
            new AddressEntity
            {
                Id = address.Id,
                ZipCode = address?.ZipCode,
                Street = address?.Street,
                Neighborhood = address?.Neighborhood,
                City = address?.City,
                State = address?.State,
                PersonEntity = person
            };

    }
}