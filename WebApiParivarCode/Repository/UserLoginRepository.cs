using Microsoft.EntityFrameworkCore;
using WebApiParivarCode.Model;

namespace WebApiParivarCode.Repository
{
    public interface IUserLoginRepository
    {
        Task<IEnumerable<UserLogin>> SelectUserByMobile(decimal? Mobile);
        Task<UserLogin> InsertUserLogin(UserLogin objuserlogin);
        Task<UserLogin> UpdateUserLogin(UserLogin objuserlogin);

    }
    public class UserLoginRepository : IUserLoginRepository
    {
        private readonly ApplicationDbContext _context;
        public UserLoginRepository(ApplicationDbContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        public async Task<IEnumerable<UserLogin>> SelectUserByMobile(decimal? Mobile)
        {
            return await _context.UserLogins.Where(x => x.Mobile == Mobile).Select(x => new UserLogin
            {
                UserLoginID = x.UserLoginID,
                Mobile = x.Mobile == null ? null : x.Mobile,
                OTP = x.OTP,
                ModifiedDate=Convert.ToDateTime(x.ModifiedDate),
                IsLoginSuccess=x.IsLoginSuccess,
                LoginAttemp=x.LoginAttemp
                 }).ToListAsync();
        }

        public async Task<UserLogin> InsertUserLogin(UserLogin objuserlogin)
        {                             
            _context.UserLogins.Add(objuserlogin);
            await _context.SaveChangesAsync();

            return objuserlogin;
        }

        public async Task<UserLogin> UpdateUserLogin(UserLogin objuserlogin)
        {           
            _context.Entry(objuserlogin).State = EntityState.Modified;

            await _context.SaveChangesAsync();
            return objuserlogin;
        }  

    }
}
