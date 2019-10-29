using Manager.People.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Manager.People.Infra.Data.Seed
{
    public static class SeeData
    {
        public static void Seed(this ModelBuilder builder)
        {
            var people = GetSeedPeople();

            var addresses = GetSeedAddresses();

            builder
               .Entity<PersonEntity>()
               .HasData(people);

            builder
            .Entity<AddressEntity>()
            .HasData(addresses);
        }

        private static List<AddressEntity> GetSeedAddresses()
        {
            return new List<AddressEntity> {
                AddressEntity.New(3).AddDataAddress("13060472","Rua Alberto Sarmento, nº 1999","Centro","Campinas","SP").AddPersonId(1),
                AddressEntity.New(5).AddDataAddress("15100222","Rua Esperança, nº 56","Centro","São Paulo","SP").AddPersonId(2),
            };
        }

        private static List<PersonEntity> GetSeedPeople()
        {
            return new List<PersonEntity> {
                 PersonEntity.New(1).AddDataProfile("Ulisses Maia","45808039819","ulisses@email.com.br",Convert.ToDateTime("05-04-1998")),
                 PersonEntity.New(2).AddDataProfile("José Pereira", "09519980563", "jose@email.com.br", Convert.ToDateTime("11-13-1953"))
            };
        }
    }
}
