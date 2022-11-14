using Microsoft.EntityFrameworkCore;
using WebApiParivarCode.Model;

namespace WebApiParivarCode.Repository
{
    public interface IFamilyRepository
    {
          Task<IEnumerable<Family>> GetFamily();
         // Task<Family> CreateFamily(Family family);
         //Task<Family> UpdateFamily(Family family);
    }

    public class FamilyRepository:IFamilyRepository
    {
        
        private readonly ApplicationDbContext _context;

        public FamilyRepository(ApplicationDbContext context)
        {          
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        public async Task<IEnumerable<Family>> GetFamily()
        {            
            return await _context.Families.ToListAsync();
        }
    }
}
