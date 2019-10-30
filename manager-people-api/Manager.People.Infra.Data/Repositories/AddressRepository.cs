using Manager.People.Domain.Entities;
using Manager.People.Domain.Repositories;
using Manager.People.Infra.Data.Context;
using System.Collections.Generic;

namespace Manager.People.Infra.Data.Repositories
{
    public class AddressRepository : IAddressRepository
    {
        private readonly ManagerContext _context;
        public AddressRepository(ManagerContext context)
        {
            _context = context;
        }

        public void RemoveCollection(IEnumerable<AddressEntity> addresses)
        {
            _context.Addresses.RemoveRange(addresses);
        }

        public IEnumerable<AddressEntity> SaveCollection(IEnumerable<AddressEntity> addresses)
        {
            _context.Addresses.AddRange(addresses);
            return addresses;
        }
    }
}
