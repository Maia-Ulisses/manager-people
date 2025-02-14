﻿// <auto-generated />
using System;
using Manager.People.Infra.Data.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Manager.People.Infra.Data.Migrations
{
    [DbContext(typeof(ManagerContext))]
    [Migration("20191029191454_Initial Migration")]
    partial class InitialMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Manager.People.Domain.Entities.AddressEntity", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("City")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.Property<Guid>("GUID");

                    b.Property<string>("Neighborhood")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.Property<int>("PersonId");

                    b.Property<string>("State")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<string>("Street")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.Property<string>("ZipCode")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.HasKey("Id");

                    b.HasIndex("PersonId");

                    b.ToTable("Addresses");

                    b.HasData(
                        new
                        {
                            Id = 3,
                            City = "Campinas",
                            GUID = new Guid("87349381-77f6-4f9b-8d3d-b8bfd41de39b"),
                            Neighborhood = "Centro",
                            PersonId = 1,
                            State = "SP",
                            Street = "Rua Alberto Sarmento, nº 1999",
                            ZipCode = "13060472"
                        },
                        new
                        {
                            Id = 5,
                            City = "São Paulo",
                            GUID = new Guid("a1c6c742-1c22-4d13-9d8b-0736bd3eae17"),
                            Neighborhood = "Centro",
                            PersonId = 2,
                            State = "SP",
                            Street = "Rua Esperança, nº 56",
                            ZipCode = "15100222"
                        });
                });

            modelBuilder.Entity("Manager.People.Domain.Entities.PersonEntity", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("BirthDay");

                    b.Property<string>("CPF")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(200);

                    b.Property<Guid>("GUID");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(200);

                    b.HasKey("Id");

                    b.ToTable("People");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            BirthDay = new DateTime(1998, 5, 4, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            CPF = "45808039819",
                            Email = "ulisses@email.com.br",
                            GUID = new Guid("6bd6e9de-ab0a-4273-8b51-f9892a29fbdc"),
                            Name = "Ulisses Maia"
                        },
                        new
                        {
                            Id = 2,
                            BirthDay = new DateTime(1953, 11, 13, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            CPF = "09519980563",
                            Email = "jose@email.com.br",
                            GUID = new Guid("26ec2d3f-15fe-4dad-ab81-8682d850b3aa"),
                            Name = "José Pereira"
                        });
                });

            modelBuilder.Entity("Manager.People.Domain.Entities.AddressEntity", b =>
                {
                    b.HasOne("Manager.People.Domain.Entities.PersonEntity", "PersonEntity")
                        .WithMany("Addresses")
                        .HasForeignKey("PersonId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
