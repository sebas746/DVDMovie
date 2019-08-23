using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DVDMovie.Models;

namespace DVDMovie.Controllers
{
    [Route("api/movies")]
    public class MovieController : Controller
    {
        private DataContext context;

        public MovieController(DataContext cxt) {
            context = cxt;
        }

        [HttpGet("{id}")]
        public Movie GetMovie(long id)
        {
            return context.Movies.Find(id);
        }
    }
}
