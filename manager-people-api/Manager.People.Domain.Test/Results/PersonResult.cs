using Manager.People.Domain.Entities;
using System;
using System.Collections.Generic;

namespace Manager.People.Domain.Test.Results
{
    public static class PersonResult
    {
        public static IEnumerable<PersonEntity> GetAll() =>
            new List<PersonEntity>
            {
                PersonEntity.New(1).AddDataProfile("Name", "00000000000000", "email", DateTime.Now),
                PersonEntity.New(1).AddDataProfile("Name 2", "111111111111", "email 2", DateTime.Now)
            };
    }
}
