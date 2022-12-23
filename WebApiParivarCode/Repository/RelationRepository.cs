using Microsoft.CodeAnalysis.FlowAnalysis;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;
using System.Reflection;
using WebApiParivarCode.Model;

namespace WebApiParivarCode.Repository
{
    public interface IRelationRepository
    {
        Task<IEnumerable<Relation>> GetRelationByUseType(int UseTypeID);

    }
    public class RelationRepository : IRelationRepository
    {
        private readonly ApplicationDbContext _context;
        public RelationRepository(ApplicationDbContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }
        public async Task<IEnumerable<Relation>> GetRelationByUseType(int UseTypeID)
        {
            return await _context.Relations.Where(x => x.UseType==UseTypeID).Select(x => new Relation
            {
                RelationID = x.RelationID,
                RelationName = x.RelationName,
                UseType = x.UseType
            }).ToListAsync();
        }

    }
}
