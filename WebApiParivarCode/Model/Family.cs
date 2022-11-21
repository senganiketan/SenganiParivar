using System.ComponentModel.DataAnnotations.Schema;

namespace WebApiParivarCode.Model
{
    [Table("Family")]
    public class Family
    {
        public int FamilyID { get; set; }
        public string? OriginalVillage { get; set; }
        public string? OriginalDistrict { get; set; }
        public string? PostalAddressName { get; set; }
        public string? CurrentAddress { get; set; }
        public string? CurrentVillage { get; set; }
        public string? CurrentDistrict { get; set; }
        public string? CurrentState { get; set; }
        public int CurrentPincode { get; set; }
       // public bool ResidentialFacility { get; set; }
        public bool Active { get; set; }
        public Int64 ModifiedByID { get; set; }
        public DateTime ModifiedDate { get; set; }

        //public virtual ICollection<FamilyMember> FamilyMembers { get; set; }
    }
}