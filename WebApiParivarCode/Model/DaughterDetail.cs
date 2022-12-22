using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApiParivarCode.Model
{

    [Table("DaughterDetail")]
    public class DaughterDetail
    {
        public int DaughterDetailID { get; set; }
        public int FamilyID { get; set; }
        public string? FirstName { get; set; }
        public string? HusbandName { get; set; }
        public string? FatherInLawName { get; set; }
        public string? Surname { get; set; }
        public int RelationID { get; set; }
        public string? Village { get; set; }
        public int? Age { get; set; }
        public Int64 Mobile { get; set; }
        public bool Active { get; set; }
        public bool AttendingProgram { get; set; }
        public bool GiftRecieved { get; set; }
        public Int64 ModifiedByID { get; set; }
        public DateTime ModifiedDate { get; set; }

    }

    public class DaughterDetailList
    {
        public int DaughterDetailID { get; set; }
        public int FamilyID { get; set; }
        public string? FirstName { get; set; }
        public string? HusbandName { get; set; }
        public string? FatherInLawName { get; set; }
        public string? Surname { get; set; }
        public int RelationID { get; set; }
        public string? Village { get; set; }
        public int? Age { get; set; }
        public Int64 Mobile { get; set; }
        public bool Active { get; set; }
        public bool AttendingProgram { get; set; }
        public bool GiftRecieved { get; set; }
        public Int64 ModifiedByID { get; set; }
        public DateTime ModifiedDate { get; set; }

        public string? RelationName { get; set; }

    }
}
