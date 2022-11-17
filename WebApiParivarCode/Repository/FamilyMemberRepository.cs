﻿using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;
using System.Reflection;
using WebApiParivarCode.Model;

namespace WebApiParivarCode.Repository
{
    public interface IFamilyMemberRepository
    {
        Task<IEnumerable<FamilyMember>> GetFamilyMembers(int ID);
        Task<FamilyMember> GetFamilyMemberByID(int ID);
        Task<FamilyMember> InsertFamilyMember(FamilyMember objFamilyMember);
        Task<FamilyMember> UpdateFamilyMember(FamilyMember objFamilyMember);
        bool DeleteFamilyMember(int ID);
    }

    public class FamilyMemberRepository : IFamilyMemberRepository
    {

        private readonly ApplicationDbContext _context;

        public FamilyMemberRepository(ApplicationDbContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        public async Task<IEnumerable<FamilyMember>> GetFamilyMembers(int FamilyID)
        {
            List<FamilyMember> familyMemberList = new List<FamilyMember>();


            familyMemberList = await _context.FamilyMembers
                                        .Where(x => x.FamilyID == FamilyID)
                                        .Join(_context.Relations,
                                                x => x.RelationID,
                                                y => y.RelationID,
                                                (x, y) => new FamilyMember
                                                {
                                                    FamilyMemberID = x.FamilyMemberID,
                                                    FirstName = x.FirstName,
                                                    FatherHusbandName = x.FatherHusbandName,
                                                    Gender = x.Gender,
                                                    Birthdate = x.Birthdate,
                                                    MaritalStatus = x.MaritalStatus,
                                                    Education = x.Education,
                                                    Business = x.Business,
                                                    Mobile = x.Mobile,
                                                    FamilyID = x.FamilyID,
                                                    AttendingProgram = x.AttendingProgram,
                                                    RelationID = x.RelationID,
                                                    RelationName = y.RelationName
                                                }
                                        ).ToListAsync();

            return familyMemberList;

        }

        public async Task<FamilyMember> GetFamilyMemberByID(int ID)
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
                                                    Birthdate = x.Birthdate,
                                                    MaritalStatus = x.MaritalStatus,
                                                    Education = x.Education,
                                                    Business = x.Business,
                                                    Mobile = x.Mobile,
                                                    FamilyID = x.FamilyID,
                                                    AttendingProgram = x.AttendingProgram,
                                                    RelationID = x.RelationID,
                                                    RelationName = y.RelationName
                                                }
                                        ).FirstOrDefaultAsync() ?? new FamilyMember();

            return familyMemberobj;
            //return await _context.FamilyMembers.FindAsync(ID);

        }

        public async Task<FamilyMember> InsertFamilyMember(FamilyMember objFamilyMember)
        {
            _context.FamilyMembers.Add(objFamilyMember);
            await _context.SaveChangesAsync();
            return objFamilyMember;

        }

        public async Task<FamilyMember> UpdateFamilyMember(FamilyMember objFamilyMember)
        {
            _context.Entry(objFamilyMember).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return objFamilyMember;

        }

        public bool DeleteFamilyMember(int ID)
        {
            bool result = false;
            var familyMember = _context.FamilyMembers.Find(ID);
            if (familyMember != null)
            {
                familyMember.Active = false;
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
    }
}
