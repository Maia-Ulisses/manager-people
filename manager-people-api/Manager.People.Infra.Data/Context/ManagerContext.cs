using Manager.People.Domain.Entities;
using Manager.People.Infra.Data.Mapping;
using Manager.People.Infra.Data.Seed;
using Microsoft.EntityFrameworkCore;

namespace Manager.People.Infra.Data.Context
{
    public class ManagerContext : DbContext
    {
        public DbSet<PersonEntity> People { get; set; }
        public DbSet<AddressEntity> Addresses { get; set; }

        public ManagerContext(DbContextOptions<ManagerContext> options)
        : base(options)
        {
            Database.Migrate();
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new PeopleConfiguration());
            modelBuilder.ApplyConfiguration(new AddressesConfiguration());
            modelBuilder.Seed();
            base.OnModelCreating(modelBuilder);
        }
    }
}
