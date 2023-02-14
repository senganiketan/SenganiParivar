using Microsoft.EntityFrameworkCore;
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
        Task<IEnumerable<DaughterDetailList>> GetAllDaughterDetails();
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
                                                    Mobile = x.Mobile==null? null: x.Mobile,
                                                    FamilyID = x.FamilyID,
                                                    AttendingProgram = x.AttendingProgram,
                                                    RelationID = x.RelationID,
                                                    RelationName = y.RelationName,
                                                    Alive = x.Alive,
                                                    AliveName = (x.Alive == 1 ? "દિકરી હયાત છે" : (x.Alive == 2 ? "જમાઈ હયાત છે" : "બન્ને હયાત છે")),
                                                    ModifiedByID = Convert.ToInt64(x.ModifiedByID),
                                                    ModifiedDate = Convert.ToDateTime(x.ModifiedDate)
                                                }
                                        ).ToListAsync();

            return daughterDetailList;

        }


        public async Task<IEnumerable<DaughterDetailList>> GetAllDaughterDetails()
        {
            List<DaughterDetailList> daughterDetailList = new List<DaughterDetailList>();

            daughterDetailList = await _context.DaughterDetails
                                        .Where(x => x.Active == true)
                                        .Join(_context.Relations,
                                                x => x.RelationID,
                                                y => y.RelationID,
                                                (x, y) => new { x, y })
                                        .Join(_context.FamilyMembers,
                                                f => f.x.FamilyID,
                                                fm => fm.FamilyID,                                                
                                                (f, fm) => new { f, fm }).Where(f => f.fm.RelationID == 1 && f.fm.Active == true)
                                        .Join(_context.Families,
                                                a => a.f.x.FamilyID,
                                                fa => fa.FamilyID,
                                                (a, fa) => new { a, fa }).Where(f => f.fa.Active == true)
                                        .Select(m => new DaughterDetailList
                                        {
                                            DaughterDetailID = m.a.f.x.DaughterDetailID,
                                            FirstName = m.a.f.x.FirstName,
                                            Surname = m.a.f.x.Surname,
                                            FatherInLawName = m.a.f.x.FatherInLawName,
                                            HusbandName = m.a.f.x.HusbandName,
                                            Village = m.a.f.x.Village,
                                            Active = m.a.f.x.Active,
                                            GiftRecieved = m.a.f.x.GiftRecieved,
                                            Age = m.a.f.x.Age,
                                            Mobile = m.a.f.x.Mobile == null ? null : m.a.f.x.Mobile,
                                            FamilyID = m.a.f.x.FamilyID,
                                            AttendingProgram = m.a.f.x.AttendingProgram,
                                            RelationID = m.a.f.x.RelationID,
                                            RelationName = m.a.f.y.RelationName,
                                            ModifiedByID = Convert.ToInt64(m.a.f.x.ModifiedByID),
                                            ModifiedDate = Convert.ToDateTime(m.a.f.x.ModifiedDate),
                                            VadilNuName = m.a.fm.FirstName,
                                            VadilNuCurrentVillage = m.fa.CurrentState,
                                        }).ToListAsync();

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
                                                    Mobile = x.Mobile == null ? null : x.Mobile,
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
                                                    Mobile = x.Mobile == null ? null : x.Mobile,
                                                    FamilyID = x.FamilyID,
                                                    AttendingProgram = x.AttendingProgram,
                                                    RelationID = x.RelationID,
                                                    Alive = x.Alive,
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
