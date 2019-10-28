namespace Manager.People.Domain.Entities
{
    public class AddressEntity
    {
        public string ZipCode { get; protected set; }
        public string Street { get; protected set; }
        public string Neighborhood { get; protected set; }
        public string City { get; protected set; }
        public string State { get; protected set; }
        public int PersonId { get; protected set; }
        public PersonEntity PersonEntity { get; set; }

        public static AddressEntity New(string zipCode, string street, string neighborhood, string city, string state) =>
            new AddressEntity
            {
                ZipCode = zipCode,
                Street = street,
                Neighborhood = neighborhood,
                City = city,
                State = state
            };

    }
}