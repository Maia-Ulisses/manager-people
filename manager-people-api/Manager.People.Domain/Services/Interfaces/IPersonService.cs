using Manager.People.Domain.Models;
using System.Collections.Generic;

namespace Manager.People.Domain.Services.Interfaces
{
    public interface IPersonService
    {
        IEnumerable<PersonModel> GetAll();
        PersonModel GetById(int id);

    }
}
