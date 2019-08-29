using DVDMovie.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace DVDMovie.Controllers 
{
    [Route("/api/session")]
    public class SessionValuesController : Controller 
    {
        [HttpGet("cart")]
        public IActionResult GetActionResult()
        {
            return Ok(HttpContext.Session.GetString("cart"));
        }

        [HttpPost("cart")]
        public void StoreCart([FromBody] MovieSelection[] movies)
        {
            var jsonData = JsonConvert.SerializeObject(movies);
            HttpContext.Session.SetString("cart", jsonData);
        }
    }
}