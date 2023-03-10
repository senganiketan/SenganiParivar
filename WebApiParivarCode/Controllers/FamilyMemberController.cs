using Microsoft.AspNetCore.Mvc;
using WebApiParivarCode.Model;
using WebApiParivarCode.Repository;

namespace WebApiParivarCode.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FamilyMemberController : Controller
    {
        private readonly IFamilyMemberRepository _familyMemberRepository;
        public FamilyMemberController(IFamilyMemberRepository familyMemberRepository)
        {
            _familyMemberRepository = familyMemberRepository ?? throw new ArgumentNullException(nameof(familyMemberRepository));
        }

        [HttpGet]
        [Route("GetFamilyMember")]
        public async Task<IActionResult> Get(int Id)
        {
            return Ok(await _familyMemberRepository.GetFamilyMembers(Id));
        }

        [HttpGet]
        [Route("GetAllFamilyMember")]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _familyMemberRepository.GetAllFamilyMembers());
        }

        [HttpGet]
        [Route("GetAllFamilyMember/{VillageName}")]
        public async Task<IActionResult> GetAllByVillage(string VillageName)
        {
            return Ok(await _familyMemberRepository.GetAllFamilyMembersByVillage(VillageName));
        }

        [HttpGet]
        [Route("GetFamilyMemberByMemberID/{Id}")]
        public async Task<IActionResult> GetFamilyMemberByMemberId(int Id)
        {
            return Ok(await _familyMemberRepository.GetFamilyMemberByMemberID(Id));
        }

        [HttpPost]
        [Route("AddFamilyMember")]
        public async Task<IActionResult> Post(FamilyMember objFamilyMember)
        {
            var result = await _familyMemberRepository.InsertFamilyMember(objFamilyMember);
            if (result.FamilyID == 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Something Went Wrong");
            }
            return Ok(await _familyMemberRepository.GetFamilyMembers(result.FamilyID));            
        }

        [HttpPut]
        [Route("UpdateFamilyMember")]
        public async Task<IActionResult> Put(FamilyMember objFamilyMember)
        {             
            return Ok( await _familyMemberRepository.UpdateFamilyMember(objFamilyMember));
        }

        [HttpDelete]
        [Route("DeleteFamilyMember")]
        public JsonResult Delete(int id)
        {
            _familyMemberRepository.DeleteFamilyMember(id);
            return new JsonResult("Deleted Successfully");
        }

        [HttpGet]
        [Route("GetFamilyMemberByIdMobile/{Id}/{mobile}")]
        public async Task<IActionResult> GetFamilyMemberByIdMobile(int Id, decimal mobile)
        {
            return Ok(await _familyMemberRepository.GetFamilyMemberByIdMobile(Id, mobile));
        }

    }
}
