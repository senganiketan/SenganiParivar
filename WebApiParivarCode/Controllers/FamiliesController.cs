using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.EntityFrameworkCore;
using WebApiParivarCode.Model;
using WebApiParivarCode.Repository;



namespace WebApiParivarCode.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FamilyController : ControllerBase
    {
      //  private readonly ApplicationDbContext _context;

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

        //[HttpPost]
        //public async Task<ActionResult<List<Family>>> CreateFamily(Family family)
        //{
        //    _context.Families.Add(family);
        //    await _context.SaveChangesAsync();
        //    return Ok(await _context.Families.ToListAsync());
        //}

        //[HttpPut]
        //public async Task<ActionResult<List<Family>>> UpdateFamily(Family family)
        //{
        //    var dbfamily = await _context.Families.FindAsync(family.FamilyID);
        //    if (dbfamily == null)
        //        return BadRequest("Family Not Found");

        //    dbfamily.OriginalVillage = family.OriginalVillage;
        //    dbfamily.OriginalDistrict = family.OriginalDistrict;
        //    dbfamily.CurrentAddress = family.CurrentAddress;
        //    dbfamily.CurrentVillage = family.CurrentVillage;
        //    dbfamily.CurrentDistrict = family.CurrentDistrict;
        //    dbfamily.CurrentState = family.CurrentState;
        //    dbfamily.CurrentPincode = family.CurrentPincode;
        //    dbfamily.ModifiedByID = family.ModifiedByID;
        //    dbfamily.ModifiedDate = DateTime.Now;

        //    await _context.SaveChangesAsync();
        //    return Ok(await _context.Families.ToListAsync());
        //}



























        //// GET: Families
        //[HttpGet]
        //public async Task<IActionResult> Index()
        //{
        //      return View(await _context.Families.ToListAsync());
        //}

        //// GET: Families/Details/5
        //public async Task<IActionResult> Details(int? id)
        //{
        //    if (id == null || _context.Families == null)
        //    {
        //        return NotFound();
        //    }

        //    var family = await _context.Families
        //        .FirstOrDefaultAsync(m => m.FamilyID == id);
        //    if (family == null)
        //    {
        //        return NotFound();
        //    }

        //    return View(family);
        //}

        //// GET: Families/Create
        //public IActionResult Create()
        //{
        //    return View();
        //}

        //// POST: Families/Create
        //// To protect from overposting attacks, enable the specific properties you want to bind to.
        //// For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public async Task<IActionResult> Create([Bind("FamilyID,OriginalVillage,OriginalDistrict,CurrentAddress,CurrentVillage,CurrentDistrict,CurrentState,CurrentPincode,ModifiedByID,ModifiedDate")] Family family)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        _context.Add(family);
        //        await _context.SaveChangesAsync();
        //        return RedirectToAction(nameof(Index));
        //    }
        //    return View(family);
        //}

        //// GET: Families/Edit/5
        //public async Task<IActionResult> Edit(int? id)
        //{
        //    if (id == null || _context.Families == null)
        //    {
        //        return NotFound();
        //    }

        //    var family = await _context.Families.FindAsync(id);
        //    if (family == null)
        //    {
        //        return NotFound();
        //    }
        //    return View(family);
        //}

        //// POST: Families/Edit/5
        //// To protect from overposting attacks, enable the specific properties you want to bind to.
        //// For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public async Task<IActionResult> Edit(int id, [Bind("FamilyID,OriginalVillage,OriginalDistrict,CurrentAddress,CurrentVillage,CurrentDistrict,CurrentState,CurrentPincode,ModifiedByID,ModifiedDate")] Family family)
        //{
        //    if (id != family.FamilyID)
        //    {
        //        return NotFound();
        //    }

        //    if (ModelState.IsValid)
        //    {
        //        try
        //        {
        //            _context.Update(family);
        //            await _context.SaveChangesAsync();
        //        }
        //        catch (DbUpdateConcurrencyException)
        //        {
        //            if (!FamilyExists(family.FamilyID))
        //            {
        //                return NotFound();
        //            }
        //            else
        //            {
        //                throw;
        //            }
        //        }
        //        return RedirectToAction(nameof(Index));
        //    }
        //    return View(family);
        //}

        //// GET: Families/Delete/5
        //public async Task<IActionResult> Delete(int? id)
        //{
        //    if (id == null || _context.Families == null)
        //    {
        //        return NotFound();
        //    }

        //    var family = await _context.Families
        //        .FirstOrDefaultAsync(m => m.FamilyID == id);
        //    if (family == null)
        //    {
        //        return NotFound();
        //    }

        //    return View(family);
        //}

        //// POST: Families/Delete/5
        //[HttpPost, ActionName("Delete")]
        //[ValidateAntiForgeryToken]
        //public async Task<IActionResult> DeleteConfirmed(int id)
        //{
        //    if (_context.Families == null)
        //    {
        //        return Problem("Entity set 'ApplicationDbContext.Families'  is null.");
        //    }
        //    var family = await _context.Families.FindAsync(id);
        //    if (family != null)
        //    {
        //        _context.Families.Remove(family);
        //    }

        //    await _context.SaveChangesAsync();
        //    return RedirectToAction(nameof(Index));
        //}

        //private bool FamilyExists(int id)
        //{
        //  return _context.Families.Any(e => e.FamilyID == id);
        //}
    }
}
