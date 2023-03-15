using Microsoft.EntityFrameworkCore;
using WebApiParivarCode.Model;

namespace WebApiParivarCode.Repository
{
    public interface IOriginalVillageRepository
    {      
        Task<IEnumerable<OriginalVillage>> GetOriginalVillages();
    }

    public class OriginalVillageRepository: IOriginalVillageRepository
    {
        private readonly ApplicationDbContext _context;
        public OriginalVillageRepository(ApplicationDbContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }
        public async Task<IEnumerable<OriginalVillage>> GetOriginalVillages()
        {
            return await _context.OriginalVillages.Select(x => new OriginalVillage
            {
                OriginalVillageID = x.OriginalVillageID,
                OriginalVillageName = x.OriginalVillageName,
                Person1Name = x.Person1Name,
                Person1Mobile = x.Person1Mobile,
                Person2Name = x.Person2Name,
                Person2Mobile = x.Person2Mobile
            }).OrderBy(x=>x.OriginalVillageName).ToListAsync();
        }
    }

   
}
