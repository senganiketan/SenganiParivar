using System.ComponentModel.DataAnnotations.Schema;
using System.Numerics;

namespace WebApiParivarCode.Model
{
    [Table("FamilyMember")]
    public class FamilyMember
    {
        public int FamilyMemberID { get; set; }
        public int FamilyID { get; set; }
        public string? FirstName { get; set; }
        public string? FatherHusbandName { get; set; }
        public int RelationID { get; set; }
        public string? Gender { get; set; }
        public int ?Age { get; set; }
        public string? MaritalStatus { get; set; }
        public string? Education { get; set; }
        public string? Business { get; set; }
        public decimal? Mobile { get; set; }
        public bool AttendingProgram { get; set; }
        public bool Active { get; set; }
        public Int64 ModifiedByID { get; set; }
        public DateTime? ModifiedDate { get; set; }        
    }
    public class FamilyMemberList
    {
        public int FamilyMemberID { get; set; }
        public int FamilyID { get; set; }
        public string? FirstName { get; set; }
        public string? FatherHusbandName { get; set; }
        public int RelationID { get; set; }
        public string? Gender { get; set; }
        public int ?Age { get; set; }
        public string? MaritalStatus { get; set; }
        public string? Education { get; set; }
        public string? Business { get; set; }
        public decimal? Mobile { get; set; }
        public bool AttendingProgram { get; set; }
        public bool Active { get; set; }
        public Int64 ModifiedByID { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string? RelationName { get; set; }
        public string? OriginalVillage { get; set; }
        public string? CurrentVillage { get; set; }

        public string? AttendingProgramValue { get; set; }
    }
}
