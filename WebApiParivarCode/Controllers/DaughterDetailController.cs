﻿using Microsoft.AspNetCore.Mvc;
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
        public async Task<IActionResult> Get(int Id)
        {
            return Ok(await _daughterDetailRepository.GetDaughterDetail(Id));
        }

        [HttpGet]
        [Route("GetDaughterDetailByID/{Id}")]
        public async Task<IActionResult> GetDaughterDetailById(int Id)
        {
            return Ok(await _daughterDetailRepository.GetDaughterDetailByID(Id));
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
            return Ok("Added Successfully");
        }

        [HttpPut]
        [Route("UpdateDaughterDetail")]
        public async Task<IActionResult> Put(DaughterDetail objDaughterDetail)
        {
            await _daughterDetailRepository.UpdateDaughterDetail(objDaughterDetail);
            return Ok("Updated Successfully");
        }

        [HttpDelete]
        [Route("DeleteDaughterDetail")]
        public JsonResult Delete(int id)
        {
            _daughterDetailRepository.DeleteDaughterDetail(id);
            return new JsonResult("Deleted Successfully");
        }
    }
}