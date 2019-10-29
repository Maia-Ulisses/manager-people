using Manager.People.Domain.Entities;
using System.Collections.Generic;

namespace Manager.People.Domain.Repositories
{
    public interface IPersonRepository
    {
        IEnumerable<PersonEntity> GetAll();
        PersonEntity GetById(int id);

    }
}
