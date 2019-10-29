using System.Collections.Generic;
using Manager.People.Domain.Extensions;
using Manager.People.Domain.Models;
using Manager.People.Domain.Repositories;
using Manager.People.Domain.Services.Interfaces;

namespace Manager.People.Domain.Services
{
    public class PersonService : IPersonService
    {
        private readonly IPersonRepository _personRepository;
        public PersonService(IPersonRepository personRepository)
        {
            _personRepository = personRepository;
        }
        public IEnumerable<PersonModel> GetAll()
        {
            var peopleEntity = _personRepository.GetAll();
            return peopleEntity.ToModel();
        }

        public PersonModel GetById(int id)
        {
            var personEntity = _personRepository.GetById(id);
            return PersonModel.New(personEntity);
        }
    }
}
