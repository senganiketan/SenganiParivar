using Microsoft.EntityFrameworkCore;
using WebApiParivarCode.Model;

namespace WebApiParivarCode.Repository
{
    public interface IFamilyRepository
    {
        Task<IEnumerable<Family>> GetFamily();
        Task<Family> GetFamilyByID(int ID);
        Task<Family> InsertFamily(Family objFamily);
        Task<Family> UpdateFamily(Family objFamily);
        bool DeleteFamily(int ID);
    }

    public class FamilyRepository : IFamilyRepository
    {

        private readonly ApplicationDbContext _context;

        public FamilyRepository(ApplicationDbContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        public async Task<IEnumerable<Family>> GetFamily()
        {
            return await _context.Families.Where(x => x.Active).ToListAsync();
        }

        public async Task<Family> GetFamilyByID(int ID)
        {
            return await _context.Families.FindAsync(ID);
        }

        public async Task<Family> InsertFamily(Family objFamily)
        {
            try
            {
                objFamily.Active = true;
                objFamily.ModifiedDate = DateTime.Now;

                _context.Families.Add(objFamily);
                await _context.SaveChangesAsync();

            }
            catch(Exception ex) {
                string result = ex.Message;
            }
            return objFamily;

        }

        public async Task<Family> UpdateFamily(Family objFamily)
        {
            _context.Entry(objFamily).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return objFamily;

        }

        public bool DeleteFamily(int ID)
        {
            bool result = false;
            var family = _context.Families.Find(ID);
            if (family != null)
            {
                family.Active = false;
                _context.Entry(family).State = EntityState.Modified;
                _context.SaveChanges();
                result = true;
            }
            else
            {
                result = false;
            }
            return result;
        }
    }
}
