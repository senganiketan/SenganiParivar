using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.EntityFrameworkCore;
using WebApiParivarCode.Model;
using WebApiParivarCode.Repository;


namespace WebApiParivarCode.Controllers
{    
    [Route("api/[controller]")]
    [ApiController]
    public class UserLoginController : ControllerBase
    {
        private readonly IUserLoginRepository _userLoginRepository;

        public UserLoginController(IUserLoginRepository userLoginRepository)
        {
            _userLoginRepository = userLoginRepository ?? throw new ArgumentNullException(nameof(userLoginRepository));
        }

        [HttpGet]
        [Route("GetUserLoginByMobile")]
        public async Task<IActionResult> GetUserLoginByMobile(decimal Mobile)
        {
            return Ok(await _userLoginRepository.SelectUserByMobile(Mobile));
        }

        [HttpPost]
        [Route("AddUserLogin")]
        public async Task<IActionResult> Post(UserLogin objuserlogin)
        {
            var result = await _userLoginRepository.InsertUserLogin(objuserlogin);
            if (result.UserLoginID == 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Something Went Wrong");
            }
            return Ok(await _userLoginRepository.SelectUserByMobile(objuserlogin.Mobile));
        }

        [HttpPut]
        [Route("UpdateUserLogin")]
        public async Task<IActionResult> Put(UserLogin objuserlogin)
        {
            return Ok(await _userLoginRepository.UpdateUserLogin(objuserlogin));
        }

     
    }
}
