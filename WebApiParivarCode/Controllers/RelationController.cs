using Microsoft.AspNetCore.Mvc;
using WebApiParivarCode.Repository;

namespace WebApiParivarCode.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RelationController : Controller
    {
        private readonly IRelationRepository _relationRepository;
        public RelationController(IRelationRepository relationRepository)
        {
            _relationRepository = relationRepository ?? throw new ArgumentNullException(nameof(relationRepository));
        }
        [HttpGet]
        [Route("GetRelation")]
        public async Task<IActionResult> GetRelationByUseType(int UseTypeID)
        {
            return Ok(await _relationRepository.GetRelationByUseType(UseTypeID));
        }

    }
}
