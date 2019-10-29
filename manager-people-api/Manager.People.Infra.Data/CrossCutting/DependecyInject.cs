using Manager.People.Domain.Repositories;
using Manager.People.Domain.Services;
using Manager.People.Domain.Services.Interfaces;
using Manager.People.Infra.Data.Context;
using Manager.People.Infra.Data.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Manager.People.Infra.Data.CrossCutting
{
    public static class DependecyInject
    {
        public static void Resolve(IServiceCollection services, IConfiguration configuration)
        {
            AddDataBase(services, configuration);
            AddServices(services);
            AddRepositories(services);
        }

        private static void AddServices(IServiceCollection services)
        {
            services.AddScoped<IPersonService, PersonService>();
        }

        private static void AddRepositories(IServiceCollection services)
        {
            services.AddScoped<IPersonRepository, PersonRepository>();
        }
        private static void AddDataBase(IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<ManagerContext>(conn =>
                         conn.UseSqlServer(configuration.GetConnectionString("DefaultConnection"),
                             data => data.MigrationsHistoryTable("HistoryMigrations"))
                             );
        }
    }
}
