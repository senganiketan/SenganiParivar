using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.EntityFrameworkCore;
using WebApiParivarCode.Model;
using WebApiParivarCode.Repository;



namespace WebApiParivarCode.Controllers
{
    //first Check in :NP
    [Route("api/[controller]")]
    [ApiController]
    public class FamilyController : ControllerBase
    {
        private readonly IFamilyRepository _familyRepository;

        public FamilyController(IFamilyRepository familyRepository)
        {          
            _familyRepository = familyRepository ?? throw new ArgumentNullException(nameof(familyRepository));
        }

        [HttpGet]
        [Route("GetFamily")]
        public async Task<IActionResult> Get()
        {             
            return Ok(await _familyRepository.GetFamily());          
        }

        [HttpGet]
        [Route("GetFamilyByID/{Id}")]
        public async Task<IActionResult> GetFamilyById(int Id)
        {
            return Ok(await _familyRepository.GetFamilyByID(Id));
        }

        [HttpGet]
        [Route("GetFamilyByMobile/{MobileNo}")]
        public async Task<IActionResult> GetFamilyByMobile(decimal MobileNo)
        {
            return Ok(await _familyRepository.GetFamilyByMobile(MobileNo));
        }

        [HttpPost]
        [Route("AddFamily")]
        public async Task<IActionResult> Post(Family objFamily)
        {
            var result = await _familyRepository.InsertFamily(objFamily);
            if (result.FamilyID == 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Something Went Wrong");
            }
            return Ok(await _familyRepository.GetFamily());
        }

        [HttpPut]
        [Route("UpdateFamily")]
        public async Task<IActionResult> Put(Family objFamily)
        {            
            return Ok(await _familyRepository.UpdateFamily(objFamily));
        }

        [HttpDelete]
        [Route("DeleteFamily")]
        public JsonResult Delete(int id)
        {
            _familyRepository.DeleteFamily(id);
            return new JsonResult("Deleted Successfully");
        }

        [HttpGet]
        [Route("GetAllFamily")]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _familyRepository.GetAllFamily());
        }

    }
}
