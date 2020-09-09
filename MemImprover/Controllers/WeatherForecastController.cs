using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace MemImprover.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
       
        public static List<Note> Notes = new List<Note>()
        {
            new Note() { Id = 1, Name = "Заметка 1", Text = "Text1", StartDate = new DateTime(2020, 12, 12) },
            new Note() { Id = 2, Name = "Заметка 2", Text = "Text2", StartDate = new DateTime(2020, 1, 1) },
            new Note() { Id = 3, Name = "Заметка 3", Text = "Text3", StartDate = new DateTime(2020, 2, 2) },
        };


        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Note> Get()
        {
            return Notes;
        }
    }
}
