using Manager.People.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Manager.People.Infra.Data.Mapping
{
    public class AddressesConfiguration : IEntityTypeConfiguration<AddressEntity>
    {
        public void Configure(EntityTypeBuilder<AddressEntity> builder)
        {
            builder.ToTable("Addresses");
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Street).IsRequired().HasMaxLength(255);
            builder.Property(x => x.State).IsRequired().HasMaxLength(100);
            builder.Property(x => x.Neighborhood).IsRequired().HasMaxLength(255);
            builder.Property(x => x.City).IsRequired().HasMaxLength(255);
            builder.Property(x => x.ZipCode).IsRequired().HasMaxLength(100);
            builder.Property(x => x.GUID).IsRequired();
            builder.HasIndex(x => x.PersonId).IsUnique(false);
        }
    }
}
