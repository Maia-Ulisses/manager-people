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

    }
}