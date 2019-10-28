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
        public PersonModel PersonEntity { get; set; }
    }
}