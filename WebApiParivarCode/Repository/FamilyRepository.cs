﻿using Microsoft.EntityFrameworkCore;
using WebApiParivarCode.Model;

namespace WebApiParivarCode.Repository
{
    public interface IFamilyRepository
    {
        Task<IEnumerable<Family>> GetFamily();
        Task<Family?> GetFamilyByID(int ID);
        Task<IEnumerable<Family>> GetFamilyByMobile(decimal Mobile);
        Task<Family> InsertFamily(Family objFamily);
        Task<Family> UpdateFamily(Family objFamily);
        bool DeleteFamily(int ID);
        Task<IEnumerable<Family>> GetAllFamily();
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
            return await _context.Families.Where(x => x.Active).Select(x => new Family
            {
                FamilyID = x.FamilyID,
                OriginalVillage = x.OriginalVillage,
                OriginalDistrict = x.OriginalDistrict,
                PostalAddressName = x.PostalAddressName,
                CurrentAddress = x.CurrentAddress,
                CurrentVillage = x.CurrentVillage,
                CurrentDistrict = x.CurrentDistrict,
                CurrentState = x.CurrentState,
                CurrentPincode = x.CurrentPincode,
                ResidentialFacility = x.ResidentialFacility,
                ModifiedByID = Convert.ToInt64(x.ModifiedByID),
                ModifiedDate = Convert.ToDateTime(x.ModifiedDate)
            }).ToListAsync();
        }

        public async Task<Family?> GetFamilyByID(int ID)
        {
            var result = await _context.Families.Where(x => x.FamilyID == ID).Select(x => new Family
            {
                FamilyID = x.FamilyID,
                OriginalVillage = x.OriginalVillage,
                OriginalDistrict = x.OriginalDistrict,
                PostalAddressName = x.PostalAddressName,
                CurrentAddress = x.CurrentAddress,
                CurrentVillage = x.CurrentVillage,
                CurrentDistrict = x.CurrentDistrict,
                CurrentState = x.CurrentState,
                CurrentPincode = x.CurrentPincode,
                ResidentialFacility = x.ResidentialFacility,
                ModifiedByID = Convert.ToInt64(x.ModifiedByID),
                ModifiedDate = Convert.ToDateTime(x.ModifiedDate)
            }).FirstOrDefaultAsync();
            return result;
        }

        public async Task<IEnumerable<Family>> GetFamilyByMobile(decimal Mobile)
        {
            var result = await _context.Families.Where(x => x.ModifiedByID == Mobile && x.Active == true).Select(x => new Family
            {
                FamilyID = x.FamilyID,
                OriginalVillage = x.OriginalVillage,
                OriginalDistrict = x.OriginalDistrict,
                PostalAddressName = x.PostalAddressName,
                CurrentAddress = x.CurrentAddress,
                CurrentVillage = x.CurrentVillage,
                CurrentDistrict = x.CurrentDistrict,
                CurrentState = x.CurrentState,
                CurrentPincode = x.CurrentPincode,
                ResidentialFacility = x.ResidentialFacility,
                ModifiedByID = Convert.ToInt64(x.ModifiedByID),
                ModifiedDate = Convert.ToDateTime(x.ModifiedDate)
            }).ToListAsync();
            return result;
        }
        public async Task<Family> InsertFamily(Family objFamily)
        {

            objFamily.Active = true;
            objFamily.ModifiedDate = DateTime.Now;

            _context.Families.Add(objFamily);
            await _context.SaveChangesAsync();

            return objFamily;

        }

        public async Task<Family> UpdateFamily(Family objFamily)
        {
            objFamily.Active = true;
            _context.Entry(objFamily).State = EntityState.Modified;

            await _context.SaveChangesAsync();
            return objFamily;

        }

        public bool DeleteFamily(int ID)
        {
            bool result = false;

            var family = _context.Families.Where(x => x.FamilyID == ID).Select(x => new Family
            {
                FamilyID = x.FamilyID,
                OriginalVillage = x.OriginalVillage,
                OriginalDistrict = x.OriginalDistrict,
                PostalAddressName = x.PostalAddressName,
                CurrentAddress = x.CurrentAddress,
                CurrentVillage = x.CurrentVillage,
                CurrentDistrict = x.CurrentDistrict,
                CurrentState = x.CurrentState,
                CurrentPincode = x.CurrentPincode,
                ResidentialFacility = x.ResidentialFacility,
                Active = x.Active,
                ModifiedByID = Convert.ToInt64(x.ModifiedByID),
                ModifiedDate = Convert.ToDateTime(x.ModifiedDate)
            }).FirstOrDefault();

            if (family != null)
            {
                family.Active = false;
                family.ModifiedDate = DateTime.Now;
                _context.Entry(family).State = EntityState.Modified;
                _context.SaveChanges();
                result = true;
            }
            return result;
        }

        public async Task<IEnumerable<Family>> GetAllFamily()
        {
            return await _context.Families.Where(x => x.Active).Select(x => new Family
            {
                FamilyID = x.FamilyID,
                OriginalVillage = x.OriginalVillage,
                //OriginalDistrict = x.OriginalDistrict,
                PostalAddressName = x.PostalAddressName,
                CurrentAddress = x.CurrentAddress,
                CurrentVillage = x.CurrentVillage,
                CurrentDistrict = x.CurrentDistrict,
                CurrentState = x.CurrentState,
                CurrentPincode = x.CurrentPincode,
            }).ToListAsync();
        }
    }
}
