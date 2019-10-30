using Manager.People.Domain.Entities;
using System.Collections.Generic;

namespace Manager.People.Domain.Repositories
{
    public interface IAddressRepository
    {
        IEnumerable<AddressEntity> SaveCollection(IEnumerable<AddressEntity> addresses);
        void RemoveCollection(IEnumerable<AddressEntity> addresses);

    }
}
