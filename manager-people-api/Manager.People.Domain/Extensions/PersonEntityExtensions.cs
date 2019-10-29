using Manager.People.Domain.Entities;
using Manager.People.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Manager.People.Domain.Extensions
{
    public static class PersonEntityExtensions
    {
        public static IEnumerable<PersonModel> ToModel(this IEnumerable<PersonEntity> people) => 
            people.Select(person => PersonModel.New(person));
    }
}
