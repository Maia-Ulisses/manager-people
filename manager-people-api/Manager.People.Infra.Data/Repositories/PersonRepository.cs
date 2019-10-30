using Manager.People.Domain.Entities;
using Manager.People.Domain.Repositories;
using Manager.People.Infra.Data.Context;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Manager.People.Infra.Data.Repositories
{
    public class PersonRepository : IPersonRepository
    {
        private readonly ManagerContext _context;
        public PersonRepository(ManagerContext context)
        {
            _context = context;
        }
        public IEnumerable<PersonEntity> GetAll() => NoTracking();

        public PersonEntity GetById(int id) => _context.People.Include(p => p.Addresses).FirstOrDefault(p => p.Id == id);

        public void Remove(PersonEntity personEntity) => _context.People.Remove(personEntity);
      
        public PersonEntity Save(PersonEntity person)
        {
            _context.Add(person);
            return person;
        }

        private IQueryable<PersonEntity> NoTracking() => _context.People.AsNoTracking();
    }
}
