using Manager.People.Domain.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Manager.People.Domain.Services.Interfaces
{
    public interface IPersonService
    {
        IEnumerable<PersonModel> GetAll();
        PersonModel GetById(int id);
        Task<PersonModel> Create(PersonModel person);
        Task<PersonModel> Update(PersonModel person, int id);
        Task Delete(int id);
    }
}
