using Microsoft.EntityFrameworkCore;


namespace WebApiParivarCode.Model
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Family> Families { get; set; }     
    }
}
