using System.Collections.Generic;
using System.Threading.Tasks;
using Manager.People.Domain.Entities;
using Manager.People.Domain.Extensions;
using Manager.People.Domain.Models;
using Manager.People.Domain.Repositories;
using Manager.People.Domain.Repositories.Transaction;
using Manager.People.Domain.Services.Interfaces;

namespace Manager.People.Domain.Services
{
    public class PersonService : IPersonService
    {
        private readonly IPersonRepository _personRepository;
        private readonly IAddressRepository _addressRepository;
        private readonly IUnitOfWork _unitOfWork;
        public PersonService(IPersonRepository personRepository, IAddressRepository addressRepository,IUnitOfWork unitOfWork)
        {
            _personRepository = personRepository;
            _addressRepository = addressRepository;
            _unitOfWork = unitOfWork;
        }

        public async Task<PersonModel> Create(PersonModel person)
        {
            var peopleEntity = SavePerson(person);
            SaveAddress(person, peopleEntity);
            await _unitOfWork.CommitAsync();

            return PersonModel.New(peopleEntity);
        }

        public async Task Delete(int id)
        {
            var peopleEntity = RemoveAddress(id);
            _personRepository.Remove(peopleEntity);
            await _unitOfWork.CommitAsync();
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

        public async Task<PersonModel> Update(PersonModel person, int id)
        {
            var personEntity = RemoveAddress(id);
            var personEntityUpdate = personEntity.UpdateEntity(person);
            SaveAddress(person, personEntityUpdate);
            await _unitOfWork.CommitAsync();
            return PersonModel.New(personEntityUpdate);
        }

        private PersonEntity RemoveAddress(int id)
        {
            var personEntity = _personRepository.GetById(id);
            _addressRepository.RemoveCollection(personEntity.Addresses);
            return personEntity;
        }

        private IEnumerable<AddressEntity> SaveAddress(PersonModel person, PersonEntity peopleEntity)
        {
            var address = AddressEntity.NewCollection(person?.Addresses, peopleEntity);

            return _addressRepository.SaveCollection(address);
        }

        private PersonEntity SavePerson(PersonModel person)
        {
            var peopleEntity = PersonEntity.New(person);

            _personRepository.Save(peopleEntity);
            return peopleEntity;
        }

    }
}
