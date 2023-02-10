using Microsoft.CodeAnalysis.FlowAnalysis;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;
using System.Reflection;
using System.Runtime.Intrinsics.X86;
using WebApiParivarCode.Model;

namespace WebApiParivarCode.Repository
{
    public interface IFamilyMemberRepository
    {
        Task<IEnumerable<FamilyMemberList>> GetFamilyMembers(int ID);
        Task<FamilyMember> GetFamilyMemberByMemberID(int ID);
        Task<FamilyMember> InsertFamilyMember(FamilyMember objFamilyMember);
        Task<FamilyMember> UpdateFamilyMember(FamilyMember objFamilyMember);
        bool DeleteFamilyMember(int ID);
        Task<FamilyMember> GetFamilyMemberByIdMobile(int familyID, decimal mobile);

        Task<IEnumerable<FamilyMemberList>> GetAllFamilyMembers();
    }

    public class FamilyMemberRepository : IFamilyMemberRepository
    {

        private readonly ApplicationDbContext _context;

        public FamilyMemberRepository(ApplicationDbContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        public async Task<IEnumerable<FamilyMemberList>> GetFamilyMembers(int FamilyID)
        {
            List<FamilyMemberList> familyMemberList = new List<FamilyMemberList>();


            familyMemberList = await _context.FamilyMembers
                                        .Where(x => x.FamilyID == FamilyID && x.Active == true)
                                        .Join(_context.Relations,
                                                x => x.RelationID,
                                                y => y.RelationID,
                                                (x, y) => new FamilyMemberList
                                                {
                                                    FamilyMemberID = x.FamilyMemberID,
                                                    FirstName = x.FirstName,
                                                    FatherHusbandName = x.FatherHusbandName,
                                                    Gender = x.Gender,
                                                    Age = x.Age,
                                                    MaritalStatus = x.MaritalStatus,
                                                    Education = x.Education,
                                                    Business = x.Business,
                                                    Mobile = x.Mobile == null ? null :x.Mobile,
                                                    FamilyID = x.FamilyID,
                                                    AttendingProgram = x.AttendingProgram,
                                                    RelationID = x.RelationID,
                                                    RelationName = y.RelationName,
                                                    ModifiedByID = Convert.ToInt64(x.ModifiedByID),
                                                    ModifiedDate = Convert.ToDateTime(x.ModifiedDate),
                                                }
                                        ).ToListAsync();

            return familyMemberList;

        }


        public async Task<IEnumerable<FamilyMemberList>> GetAllFamilyMembers()
        {
            List<FamilyMemberList> familyMemberList = new List<FamilyMemberList>();


            familyMemberList = await _context.FamilyMembers
                                        .Where(x => x.Active == true)
                                        .Join(_context.Relations,
                                                x => x.RelationID,
                                                y => y.RelationID,
                                                (x, y) => new { x, y })
                                        .Join(_context.Families,
                                        fm => fm.x.FamilyID,
                                        f => f.FamilyID,
                                        (f, fm) => new { f, fm })
                                        .Select(m => new FamilyMemberList
                                        {
                                            FamilyMemberID = m.f.x.FamilyMemberID,
                                            FirstName = m.f.x.FirstName,
                                            FatherHusbandName = m.f.x.FatherHusbandName,
                                            Gender = m.f.x.Gender,
                                            Age = m.f.x.Age,
                                            Mobile = m.f.x.Mobile,
                                            MaritalStatus = m.f.x.MaritalStatus,
                                            FamilyID = m.f.x.FamilyID,
                                            AttendingProgram = m.f.x.AttendingProgram,
                                            RelationName = m.f.y.RelationName,
                                            CurrentVillage = m.fm.CurrentVillage,
                                            OriginalVillage = m.fm.OriginalVillage
                                        }).ToListAsync();

            return familyMemberList;

        }

        public async Task<FamilyMember> GetFamilyMemberByMemberID(int ID)
        {
            FamilyMember familyMemberobj = new FamilyMember();

            familyMemberobj = await _context.FamilyMembers
                                        .Where(x => x.FamilyMemberID == ID)
                                        .Join(_context.Relations,
                                                x => x.RelationID,
                                                y => y.RelationID,
                                                (x, y) => new FamilyMember
                                                {
                                                    FamilyMemberID = x.FamilyMemberID,
                                                    FirstName = x.FirstName,
                                                    FatherHusbandName = x.FatherHusbandName,
                                                    Gender = x.Gender,
                                                    Age = x.Age,
                                                    MaritalStatus = x.MaritalStatus,
                                                    Education = x.Education,
                                                    Business = x.Business,
                                                    Mobile = x.Mobile == null ? null : x.Mobile,
                                                    FamilyID = x.FamilyID,
                                                    AttendingProgram = x.AttendingProgram,
                                                    RelationID = x.RelationID,
                                                    ModifiedByID = Convert.ToInt64(x.ModifiedByID),
                                                    ModifiedDate = Convert.ToDateTime(x.ModifiedDate),
                                                }
                                        ).FirstOrDefaultAsync() ?? new FamilyMember();
            return familyMemberobj;

        }

        public async Task<FamilyMember> InsertFamilyMember(FamilyMember objFamilyMember)
        {
            objFamilyMember.Active = true;
            objFamilyMember.ModifiedDate = DateTime.Now;
            _context.FamilyMembers.Add(objFamilyMember);
            await _context.SaveChangesAsync();
            return objFamilyMember;
        }

        public async Task<FamilyMember> UpdateFamilyMember(FamilyMember objFamilyMember)
        {
            objFamilyMember.Active = true;
            objFamilyMember.ModifiedDate = DateTime.Now;
            _context.Entry(objFamilyMember).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return objFamilyMember;

        }

        public bool DeleteFamilyMember(int FamilyMemberID)
        {
            bool result = false;
            var familyMember = _context.FamilyMembers
                                        .Where(x => x.FamilyMemberID == FamilyMemberID)
                                        .Join(_context.Relations,
                                                x => x.RelationID,
                                                y => y.RelationID,
                                                (x, y) => new FamilyMember
                                                {
                                                    FamilyMemberID = x.FamilyMemberID,
                                                    FirstName = x.FirstName,
                                                    FatherHusbandName = x.FatherHusbandName,
                                                    Gender = x.Gender,
                                                    Age = x.Age,
                                                    MaritalStatus = x.MaritalStatus,
                                                    Education = x.Education,
                                                    Business = x.Business,
                                                    Mobile = x.Mobile == null ? null : x.Mobile,
                                                    FamilyID = x.FamilyID,
                                                    AttendingProgram = x.AttendingProgram,
                                                    RelationID = x.RelationID,
                                                    ModifiedByID = Convert.ToInt64(x.ModifiedByID),
                                                    ModifiedDate = Convert.ToDateTime(x.ModifiedDate),
                                                }
                                        ).FirstOrDefault();
            if (familyMember != null)
            {
                familyMember.Active = false;
                familyMember.ModifiedDate = DateTime.Now;
                _context.Entry(familyMember).State = EntityState.Modified;
                _context.SaveChanges();
                result = true;
            }
            else
            {
                result = false;
            }
            return result;
        }

        public async Task<FamilyMember> GetFamilyMemberByIdMobile(int familyID, decimal mobile)
        {
            FamilyMember familyMemberobj = new FamilyMember();

            familyMemberobj = await _context.FamilyMembers
                                        .Where(x => x.FamilyID == familyID && x.RelationID == 1 && x.ModifiedByID == mobile && x.Active == true)
                                        .OrderBy(x => x.FamilyMemberID)
                                        .Join(_context.Relations,
                                                x => x.RelationID,
                                                y => y.RelationID,
                                                (x, y) => new FamilyMember
                                                {
                                                    FamilyMemberID = x.FamilyMemberID,
                                                    FirstName = x.FirstName,
                                                    FatherHusbandName = x.FatherHusbandName,
                                                    Gender = x.Gender,
                                                    Age = x.Age,
                                                    MaritalStatus = x.MaritalStatus,
                                                    Education = x.Education,
                                                    Business = x.Business,
                                                    Mobile = x.Mobile == null ? null : x.Mobile,
                                                    FamilyID = x.FamilyID,
                                                    AttendingProgram = x.AttendingProgram,
                                                    RelationID = x.RelationID,
                                                    ModifiedByID = Convert.ToInt64(x.ModifiedByID),
                                                    ModifiedDate = Convert.ToDateTime(x.ModifiedDate),
                                                }
                                        ).FirstOrDefaultAsync() ?? new FamilyMember();
            return familyMemberobj;

        }
    }
}
