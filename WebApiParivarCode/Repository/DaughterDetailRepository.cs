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
        Task<IEnumerable<DaughterDetailList>> GetAllDaughterDetailsSearch(string villageName);
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
                                                    RelationName = y.RelationName,
                                                    Alive = x.Alive,
                                                    AliveName = x.Alive == 1 ? "દિકરી હયાત છે" : (x.Alive == 2 ? "જમાઈ હયાત છે" : "બન્ને હયાત છે"),
                                                    ModifiedByID = Convert.ToInt64(x.ModifiedByID),
                                                    ModifiedDate = Convert.ToDateTime(x.ModifiedDate)
                                                }
                                        ).ToListAsync();

            return daughterDetailList;

        }


        public async Task<IEnumerable<DaughterDetailList>> GetAllDaughterDetails()
        {
            List<DaughterDetailList> daughterDetailList;

            daughterDetailList = (from dd in _context.DaughterDetails
                                  join r in _context.Relations on dd.RelationID equals r.RelationID
                                  join fm in _context.FamilyMembers on dd.FamilyID equals fm.FamilyID into ddj
                                  from subpet in ddj.Where(ddj => ddj.RelationID == 1 && ddj.Active == true).DefaultIfEmpty()
                                  join f in _context.Families on dd.FamilyID equals f.FamilyID
                                  where dd.Active == true && f.Active == true
                                  select new DaughterDetailList
                                  {
                                      FamilyID = dd.FamilyID,
                                      FirstName = dd.FirstName,
                                      Surname = dd.Surname,
                                      FatherInLawName = dd.FatherInLawName,
                                      HusbandName = dd.HusbandName,
                                      Village = dd.Village,
                                      Active = dd.Active,
                                      Age = dd.Age,
                                      Mobile = dd.Mobile == null ? null : dd.Mobile,
                                      AttendingProgramValue = dd.AttendingProgram == true ? "Yes" : "No",
                                      RelationName = r.RelationName,
                                      VadilNuName = subpet.FirstName,
                                      VadilNuOrginalVillage = f.OriginalVillage,
                                      AliveName = dd.Alive == 1 ? "દિકરીહયાત છે" : (dd.Alive == 2 ? "જમાઈ હયાત છે" : "બન્ને હયાત છે"),
                                  }).ToList();

            return daughterDetailList.OrderBy(f => f.VadilNuOrginalVillage).ThenBy(f => f.FamilyID);
        }

        public async Task<IEnumerable<DaughterDetailList>> GetAllDaughterDetailsSearch(string villageName)
        {
            List<DaughterDetailList> daughterDetailList;

            daughterDetailList = (from dd in _context.DaughterDetails
                                  join r in _context.Relations on dd.RelationID equals r.RelationID
                                  join fm in _context.FamilyMembers on dd.FamilyID equals fm.FamilyID into ddj
                                  from subpet in ddj.Where(ddj => ddj.RelationID == 1 && ddj.Active == true).DefaultIfEmpty()
                                  join f in _context.Families on dd.FamilyID equals f.FamilyID
                                  where dd.Active == true && f.Active == true && dd.Village == villageName
                                  select new DaughterDetailList
                                  {
                                      FamilyID = dd.FamilyID,
                                      DaughterDetailID = dd.DaughterDetailID,
                                      FirstName = dd.FirstName,
                                      Surname = dd.Surname,
                                      FatherInLawName = dd.FatherInLawName,
                                      HusbandName = dd.HusbandName,
                                      Village = dd.Village,
                                      Active = dd.Active,
                                      GiftRecieved = dd.GiftRecieved,
                                      Age = dd.Age,
                                      Mobile = dd.Mobile == null ? null : dd.Mobile,
                                      AttendingProgramValue = dd.AttendingProgram == true ? "Yes" : "No",
                                      RelationID = dd.RelationID,
                                      RelationName = r.RelationName,
                                      ModifiedByID = Convert.ToInt64(dd.ModifiedByID),
                                      ModifiedDate = Convert.ToDateTime(dd.ModifiedDate),
                                      VadilNuName = subpet.FirstName,
                                      VadilNuOrginalVillage = f.OriginalVillage,
                                      AliveName = dd.Alive == 1 ? "દિકરીહયાત છે" : (dd.Alive == 2 ? "જમાઈ હયાત છે" : "બન્ને હયાત છે"),
                                  }).ToList();

            return daughterDetailList.OrderByDescending(f => f.FamilyID);
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
                                                    Alive = x.Alive,
                                                    ModifiedByID = Convert.ToInt64(x.ModifiedByID),
                                                    ModifiedDate = Convert.ToDateTime(x.ModifiedDate)
                                                }
                                        ).FirstOrDefaultAsync() ?? new DaughterDetail();

            return daughterDetailobj;

        }

        public async Task<DaughterDetail> InsertDaughterDetail(DaughterDetail objDaughterDetail)
        {
            objDaughterDetail.ModifiedDate = DateTime.Now;
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
