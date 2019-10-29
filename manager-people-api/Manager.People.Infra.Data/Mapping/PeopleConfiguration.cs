using Manager.People.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Manager.People.Infra.Data.Mapping
{
    public class PeopleConfiguration : IEntityTypeConfiguration<PersonEntity>
    {
        public void Configure(EntityTypeBuilder<PersonEntity> builder)
        {
            builder.ToTable("People");
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Email).IsRequired().HasMaxLength(200);
            builder.Property(x => x.Name).IsRequired().HasMaxLength(200);
            builder.Property(x => x.CPF).IsRequired().HasMaxLength(50);
            builder.Property(x => x.BirthDay).IsRequired();
            builder.Property(x => x.GUID).IsRequired();
            builder.HasMany(x => x.Addresses).WithOne(x => x.PersonEntity).HasForeignKey(x => x.PersonId);
        }
    }
}
