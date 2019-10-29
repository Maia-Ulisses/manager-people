using Manager.People.Api.Response.Person;
using Manager.People.Domain.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Manager.People.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        private readonly IPersonService _personService;
        public PersonController(IPersonService personService)
        {
            _personService = personService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var peopleModel = _personService.GetAll();
            return Ok(PersonGetAllResponseModel.New(peopleModel));
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var personModel = _personService.GetById(id);
            return Ok(PersonGetByIdResponseModel.New(personModel));
        }
    }
}
