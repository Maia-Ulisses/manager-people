using System.Threading.Tasks;

namespace Manager.People.Domain.Repositories.Transaction
{
    public interface IUnitOfWork
    {
        Task<bool> CommitAsync();
    }
}
