using Manager.People.Domain.Entities;
using System.Collections.Generic;
using System.Linq;

namespace Manager.People.Domain.Models
{
    public class AddressModel
    {
        public string ZipCode { get; protected set; }
        public string Street { get; protected set; }
        public string Neighborhood { get; protected set; }
        public string City { get; protected set; }
        public string State { get; protected set; }
        public int PersonId { get; protected set; }

        public static IEnumerable<AddressModel> NewCollection(IEnumerable<AddressEntity> addresses) =>
            addresses?.Select(a => ParseModel(a));
        private static AddressModel ParseModel(AddressEntity addressEntity) =>
            new AddressModel
            {
                ZipCode = addressEntity?.ZipCode,
                Street = addressEntity?.Street,
                Neighborhood = addressEntity?.Neighborhood,
                City = addressEntity?.City,
                State = addressEntity?.State,
                PersonId = addressEntity.PersonId
            };
    }
}