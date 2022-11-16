using System.ComponentModel.DataAnnotations.Schema;

namespace WebApiParivarCode.Model
{
    [Table("Relation")]
    public class Relation
    {
        public int RelationID { get; set; }

        public string? RelationName { get; set; }

        public int UseType { get; set; }
    }
}
