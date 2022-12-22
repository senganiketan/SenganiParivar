using Microsoft.CodeAnalysis.FlowAnalysis;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;
using System.Reflection;
using WebApiParivarCode.Model;

namespace WebApiParivarCode.Repository
{
    public interface IDaughterDetailRepository
    {
        Task<IEnumerable<DaughterDetailList>> GetDaughterDetails(int FamilyID);
        Task<DaughterDetail> GetDaughterDetailByID(int DaughterDetailID);
        Task<DaughterDetail> InsertDaughterDetail(DaughterDetail objDaughterDetail);
        Task<DaughterDetail> UpdateDaughterDetail(DaughterDetail objDaughterDetail);
        bool DeleteDaughterDetail(int DaughterDetailID);
    }

    public class DaughterDetailRepository : IDaughterDetailRepository
    {

        private readonly ApplicationDbContext _context;

        public DaughterDetailRepository(ApplicationDbContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        public async Task<IEnumerable<DaughterDetailList>> GetDaughterDetails(int FamilyID)
        {
            List<DaughterDetailList> daughterDetailList = new List<DaughterDetailList>();


            daughterDetailList = await _context.DaughterDetails
                                        .Where(x => x.FamilyID == FamilyID && x.Active == true)
                                        .Join(_context.Relations,
                                                x => x.RelationID,
                                                y => y.RelationID,
                                                (x, y) => new DaughterDetailList
                                                {
                                                    DaughterDetailID=x.DaughterDetailID,
                                                    FirstName = x.FirstName,
                                                    Surname = x.Surname,
                                                    FatherInLawName = x.FatherInLawName,
                                                    HusbandName = x.HusbandName,
                                                    Village = x.Village,
                                                    Active = x.Active,
                                                    GiftRecieved = x.GiftRecieved,                                                   
                                                    Age = x.Age,
                                                    Mobile = Convert.ToInt64(x.Mobile),
                                                    FamilyID = x.FamilyID,
                                                    AttendingProgram = x.AttendingProgram,
                                                    RelationID = x.RelationID,
                                                    RelationName = y.RelationName,
                                                    ModifiedByID = Convert.ToInt64(x.ModifiedByID),
                                                    ModifiedDate = Convert.ToDateTime(x.ModifiedDate)
                                                }
                                        ).ToListAsync();

            return daughterDetailList;

        }

        public async Task<DaughterDetail> GetDaughterDetailByID(int DaughterDetailID)
        {
            DaughterDetail daughterDetailobj = new DaughterDetail();

            daughterDetailobj = await _context.DaughterDetails
                                        .Where(x => x.DaughterDetailID == DaughterDetailID)
                                        .Join(_context.Relations,
                                                x => x.RelationID,
                                                y => y.RelationID,
                                                (x, y) => new DaughterDetail
                                                {
                                                    DaughterDetailID = x.DaughterDetailID,
                                                    FirstName = x.FirstName,
                                                    Surname = x.Surname,
                                                    FatherInLawName = x.FatherInLawName,
                                                    HusbandName = x.HusbandName,
                                                    Village = x.Village,
                                                    Active = x.Active,
                                                    GiftRecieved = x.GiftRecieved,                                                    
                                                    Age = x.Age,
                                                    Mobile = Convert.ToInt64(x.Mobile),
                                                    FamilyID = x.FamilyID,
                                                    AttendingProgram = x.AttendingProgram,
                                                    RelationID = x.RelationID,
                                                    ModifiedByID = Convert.ToInt64(x.ModifiedByID),
                                                    ModifiedDate = Convert.ToDateTime(x.ModifiedDate)
                                                }
                                        ).FirstOrDefaultAsync() ?? new DaughterDetail();

            return daughterDetailobj;

        }

        public async Task<DaughterDetail> InsertDaughterDetail(DaughterDetail objDaughterDetail)
        {
            objDaughterDetail.ModifiedDate=DateTime.Now;
            objDaughterDetail.Active = true;
            _context.DaughterDetails.Add(objDaughterDetail);
            await _context.SaveChangesAsync();
            return objDaughterDetail;
        }

        public async Task<DaughterDetail> UpdateDaughterDetail(DaughterDetail objDaughterDetail)
        {
            objDaughterDetail.ModifiedDate = DateTime.Now;
            objDaughterDetail.Active = true;
            _context.Entry(objDaughterDetail).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return objDaughterDetail;

        }

        public bool DeleteDaughterDetail(int DaughterDetailID)
        {
            bool result = false;
            var daughterDetail = _context.DaughterDetails
                                        .Where(x => x.DaughterDetailID == DaughterDetailID)
                                        .Join(_context.Relations,
                                                x => x.RelationID,
                                                y => y.RelationID,
                                                (x, y) => new DaughterDetail
                                                {
                                                    DaughterDetailID = x.DaughterDetailID,
                                                    FirstName = x.FirstName,
                                                    Surname = x.Surname,
                                                    FatherInLawName = x.FatherInLawName,
                                                    HusbandName = x.HusbandName,
                                                    Village = x.Village,
                                                    Active = x.Active,
                                                    GiftRecieved = x.GiftRecieved,
                                                    Age = x.Age,
                                                    Mobile = Convert.ToInt64(x.Mobile),
                                                    FamilyID = x.FamilyID,
                                                    AttendingProgram = x.AttendingProgram,
                                                    RelationID = x.RelationID,
                                                    ModifiedByID = Convert.ToInt64(x.ModifiedByID),
                                                    ModifiedDate = Convert.ToDateTime(x.ModifiedDate)
                                                }
                                        ).FirstOrDefault();

            if (daughterDetail != null)
            {
                daughterDetail.Active = false;
                daughterDetail.ModifiedDate = DateTime.Now;
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
