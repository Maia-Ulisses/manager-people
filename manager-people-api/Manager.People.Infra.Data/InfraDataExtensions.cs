using Manager.People.Infra.Data.CrossCutting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Manager.People.Infra.Data
{
    public static class InfraDataExtensions
    {
        public static void AddManager(this IServiceCollection services, IConfiguration configuration) =>
            DependecyInject.Resolve(services, configuration);
    }
}
