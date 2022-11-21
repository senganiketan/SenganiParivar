﻿using System.ComponentModel.DataAnnotations.Schema;

namespace WebApiParivarCode.Model
{
    public class FamilyMemberList
    {
        public int FamilyMemberID { get; set; }
        public int FamilyID { get; set; }
        public string? FirstName { get; set; }
        public string? FatherHusbandName { get; set; }
        public int RelationID { get; set; }
        public string? Gender { get; set; }
        public DateTime Birthdate { get; set; }
        public string? MaritalStatus { get; set; }
        public string? Education { get; set; }
        public string? Business { get; set; }
        public int Mobile { get; set; }
        public bool AttendingProgram { get; set; }
        public bool Active { get; set; }
        public int ModifiedByID { get; set; }
        public DateTime ModifiedDate { get; set; }
        public string? RelationName { get; set; }
    }
}
