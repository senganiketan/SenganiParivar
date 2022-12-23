using Microsoft.AspNetCore.Mvc;
using WebApiParivarCode.Model;
using WebApiParivarCode.Repository;

namespace WebApiParivarCode.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DaughterDetailController : Controller
    {
        private readonly IDaughterDetailRepository _daughterDetailRepository;
        public DaughterDetailController(IDaughterDetailRepository daughterDetailRepository)
        {
            _daughterDetailRepository = daughterDetailRepository ?? throw new ArgumentNullException(nameof(daughterDetailRepository));
        }

        [HttpGet]
        [Route("GetDaughterDetail")]
        public async Task<IActionResult> Get(int FamilyID)
        {
            return Ok(await _daughterDetailRepository.GetDaughterDetails(FamilyID));
        }

        [HttpGet]
        [Route("GetDaughterDetailByID/{DaughterDetailID}")]
        public async Task<IActionResult> GetDaughterDetailById(int DaughterDetailID)
        {
            return Ok(await _daughterDetailRepository.GetDaughterDetailByID(DaughterDetailID));
        }

        [HttpPost]
        [Route("AddDaughterDetail")]
        public async Task<IActionResult> Post(DaughterDetail objDaughterDetail)
        {
            var result = await _daughterDetailRepository.InsertDaughterDetail(objDaughterDetail);
            if (result.FamilyID == 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Something Went Wrong");
            }
            return Ok(await _daughterDetailRepository.GetDaughterDetails(result.FamilyID));
        }


        [HttpPut]
        [Route("UpdateDaughterDetail")]
        public async Task<IActionResult> Put(DaughterDetail objDaughterDetail)
        {            
            return Ok(await _daughterDetailRepository.UpdateDaughterDetail(objDaughterDetail));
        }
       

        [HttpDelete]
        [Route("DeleteDaughterDetail")]
        public JsonResult Delete(int DaughterDetailID)
        {
            _daughterDetailRepository.DeleteDaughterDetail(DaughterDetailID);
            return new JsonResult("Deleted Successfully");
        }
    }
}
