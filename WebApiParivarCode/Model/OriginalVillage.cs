using System.ComponentModel.DataAnnotations.Schema;

namespace WebApiParivarCode.Model
{
    [Table("OriginalVillage")]
    public class OriginalVillage
    {
        public int OriginalVillageID { get; set; }
        public string? OriginalVillageName { get; set; }
        public string? Person1Name { get; set; }
        public decimal? Person1Mobile { get; set; }
        public string? Person2Name { get; set; }
        public decimal? Person2Mobile { get; set; }
    }
}


