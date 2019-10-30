using Manager.People.Api.Request.Person;
using Manager.People.Api.Response.Person;
using Manager.People.Domain.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

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
            return Ok(PersonResponseModel.New(personModel));
        }

        [HttpPost]
        public async Task<IActionResult> Create(PersonRequestBaseModel personRequest)
        { 
            var personModel = personRequest.ToModel();
            var personResult = await _personService.Create(personModel);
            return Ok(PersonResponseModel.New(personResult));          
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update([FromBody]PersonRequestBaseModel personRequest, int id)
        {
            var personModel = personRequest.ToModel();
            var personResult = await _personService.Update(personModel, id);
            return Ok(PersonResponseModel.New(personResult));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
             await _personService.Delete(id);
            return Ok();
        }
    }
}
