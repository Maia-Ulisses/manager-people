using Manager.People.Domain.Extensions;
using Manager.People.Domain.Models;
using Manager.People.Domain.Repositories;
using Manager.People.Domain.Repositories.Transaction;
using Manager.People.Domain.Services;
using Manager.People.Domain.Services.Interfaces;
using Manager.People.Domain.Test.Results;
using Moq;
using NUnit.Framework;
using System.Linq;

namespace Manager.People.Domain.Test.Services
{
    [TestFixture]
    public class PersonServiceTest
    {
        private Mock<IUnitOfWork> _unitOfWorkMock;
        private Mock<IPersonRepository> _personRepository;
        private Mock<IAddressRepository> _addressRepository;
        private IPersonService _service;


        [SetUp]
        public void Setup()
        {
            const MockBehavior behavior = MockBehavior.Strict;
            _unitOfWorkMock = new Mock<IUnitOfWork>(behavior);
            _personRepository = new Mock<IPersonRepository>(behavior);
            _addressRepository = new Mock<IAddressRepository>(behavior);

            _service = new PersonService(_personRepository.Object, _addressRepository.Object, _unitOfWorkMock.Object);
        }

        [Test]
        public void Shold_GetAll_People_Test()
        {
            var people = PersonResult.GetAll();
            var expected = people.ToModel();

            _personRepository.Setup(_ => _.GetAll()).Returns(people);

            var result = _service.GetAll();

            _personRepository.Verify(_ => _.GetAll(), Times.Once);

            Assert.AreEqual(expected.GetType(), result.GetType());
            Assert.AreEqual(expected.Count(), result.Count());
            Assert.AreEqual(expected.First().Id,result.First().Id);
        }

        [Test]
        public void Shold_Get_Person_By_Id_Test()
        {
            var person = PersonResult.GetAll().First();
            var expected = PersonModel.New(person);

            _personRepository.Setup(_ => _.GetById(1)).Returns(person);

            var result = _service.GetById(1);

            _personRepository.Verify(_ => _.GetById(1), Times.Once);

            Assert.AreEqual(expected.GetType(), result.GetType());
            Assert.AreEqual(expected.Id, result.Id);
        }
    }
}
