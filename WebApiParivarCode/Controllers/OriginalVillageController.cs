using Microsoft.AspNetCore.Mvc;
using WebApiParivarCode.Model;
using WebApiParivarCode.Repository;

namespace WebApiParivarCode.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OriginalVillageController : Controller
    {
        private readonly IOriginalVillageRepository _originalvillageRepository;
        public OriginalVillageController(IOriginalVillageRepository originalvillageRepository)
        {
            _originalvillageRepository = originalvillageRepository ?? throw new ArgumentNullException(nameof(originalvillageRepository));
        }

        [HttpGet]
        [Route("GetOriginalVillages")]
        public async Task<IActionResult> GetOriginalVillages()
        {
            return Ok(await _originalvillageRepository.GetOriginalVillages());
        }
    }
}
