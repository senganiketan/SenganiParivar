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
        public int ModifiedByID { get; set; }
        public DateTime ModifiedDate { get; set; }
    }
}