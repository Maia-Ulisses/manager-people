using Manager.People.Domain.Models;
using System.Collections.Generic;
using System.Linq;

namespace Manager.People.Api.Response.Address
{
    public class AddressBaseResponseModel
    {
        public string ZipCode { get; protected set; }
        public string Street { get; protected set; }
        public string Neighborhood { get; protected set; }
        public string City { get; protected set; }
        public string State { get; protected set; }
        public int PersonId { get; protected set; }

        public static IEnumerable<AddressBaseResponseModel> NewCollection(IEnumerable<AddressModel> addressModels) =>
            addressModels.Select(a => ParseModel(a));

        protected static AddressBaseResponseModel ParseModel(AddressModel addressModel) =>
            new AddressBaseResponseModel
            {
                ZipCode = addressModel.ZipCode,
                Street = addressModel.Street,
                Neighborhood = addressModel.Neighborhood,
                City = addressModel.City,
                State = addressModel.State,
                PersonId = addressModel.PersonId
            };
    }
}
