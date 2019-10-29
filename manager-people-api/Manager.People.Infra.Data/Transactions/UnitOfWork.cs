using Manager.People.Domain.Repositories.Transaction;
using Manager.People.Infra.Data.Context;
using System.Threading.Tasks;

namespace Manager.People.Infra.Data.Transactions
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ManagerContext _context;

        public UnitOfWork(ManagerContext context) => _context = context;
      
        public async Task<bool> CommitAsync() => await _context.SaveChangesAsync() > 0;

    }
}
