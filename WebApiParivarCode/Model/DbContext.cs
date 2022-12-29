using Microsoft.EntityFrameworkCore;


namespace WebApiParivarCode.Model
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Family> Families { get; set; }

        public DbSet<FamilyMember> FamilyMembers { get; set; }

        public DbSet<DaughterDetail> DaughterDetails { get; set; }
        public DbSet<Relation> Relations { get; set; }

        public DbSet<UserLogin> UserLogins { get; set; }
    }
}
