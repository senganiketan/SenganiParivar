using Microsoft.CodeAnalysis.FlowAnalysis;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;
using System.Reflection;
using WebApiParivarCode.Model;

namespace WebApiParivarCode.Repository
{
    public interface IDaughterDetailRepository
    {
        Task<IEnumerable<DaughterDetailList>> GetDaughterDetail(int ID);
        Task<DaughterDetail> GetDaughterDetailByID(int ID);
        Task<DaughterDetail> InsertDaughterDetail(DaughterDetail objDaughterDetail);
        Task<DaughterDetail> UpdateDaughterDetail(DaughterDetail objDaughterDetail);
        bool DeleteDaughterDetail(int ID);
    }

    public class DaughterDetailRepository : IDaughterDetailRepository
    {

        private readonly ApplicationDbContext _context;

        public DaughterDetailRepository(ApplicationDbContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        public async Task<IEnumerable<DaughterDetailList>> GetDaughterDetail(int FamilyID)
        {
            List<DaughterDetailList> daughterDetailList = new List<DaughterDetailList>();


            daughterDetailList = await _context.DaughterDetails
                                        .Where(x => x.FamilyID == FamilyID)
                                        .Join(_context.Relations,
                                                x => x.RelationID,
                                                y => y.RelationID,
                                                (x, y) => new DaughterDetailList
                                                {
                                                    FirstName = x.FirstName,
                                                    Surname = x.Surname,
                                                    FatherInLawName = x.FatherInLawName,
                                                    HusbandName = x.HusbandName,
                                                    Village = x.Village,
                                                    Active = x.Active,
                                                    GiftRecieved = x.GiftRecieved,
                                                    DaughterDetailID = x.DaughterDetailID,
                                                    Birthdate = Convert.ToDateTime(x.Birthdate),
                                                    Mobile = x.Mobile,
                                                    FamilyID = x.FamilyID,
                                                    AttendingProgram = x.AttendingProgram,
                                                    RelationID = x.RelationID,
                                                    RelationName = y.RelationName,
                                                    ModifiedByID = x.ModifiedByID,
                                                    ModifiedDate = x.ModifiedDate
                                                }
                                        ).ToListAsync();

            return daughterDetailList;

        }

        public async Task<DaughterDetail> GetDaughterDetailByID(int ID)
        {
            DaughterDetail daughterDetailobj = new DaughterDetail();

            daughterDetailobj = await _context.DaughterDetails
                                        .Where(x => x.DaughterDetailID == ID)
                                        .Join(_context.Relations,
                                                x => x.RelationID,
                                                y => y.RelationID,
                                                (x, y) => new DaughterDetail
                                                {
                                                    FirstName = x.FirstName,
                                                    Surname = x.Surname,
                                                    FatherInLawName = x.FatherInLawName,
                                                    HusbandName = x.HusbandName,
                                                    Village = x.Village,
                                                    Active = x.Active,
                                                    GiftRecieved = x.GiftRecieved,
                                                    DaughterDetailID = x.DaughterDetailID,
                                                    Birthdate = Convert.ToDateTime(x.Birthdate),
                                                    Mobile = x.Mobile,
                                                    FamilyID = x.FamilyID,
                                                    AttendingProgram = x.AttendingProgram,
                                                    RelationID = x.RelationID,
                                                    ModifiedByID = x.ModifiedByID,
                                                    ModifiedDate = x.ModifiedDate
                                                }
                                        ).FirstOrDefaultAsync() ?? new DaughterDetail();

            return daughterDetailobj;

        }

        public async Task<DaughterDetail> InsertDaughterDetail(DaughterDetail objDaughterDetail)
        {
            _context.DaughterDetails.Add(objDaughterDetail);
            await _context.SaveChangesAsync();
            return objDaughterDetail;
        }

        public async Task<DaughterDetail> UpdateDaughterDetail(DaughterDetail objDaughterDetail)
        {
            _context.Entry(objDaughterDetail).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return objDaughterDetail;

        }

        public bool DeleteDaughterDetail(int ID)
        {
            bool result = false;
            var daughterDetail = _context.DaughterDetails.Find(ID);
            if (daughterDetail != null)
            {
                daughterDetail.Active = false;
                _context.Entry(daughterDetail).State = EntityState.Modified;
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
