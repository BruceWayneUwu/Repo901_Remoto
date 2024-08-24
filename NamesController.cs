  [HttpGet]
  [Route("{idcity}/name")]
  public IActionResult GetCity(int idcity)
  {

      var city = CitiesDataStore.Current.Cities.FirstOrDefault(c => c.Id.Equals(idcity));
      if (city is null)
      {
          return NotFound($"La ciudad con el id {idcity} No existe en la base de datos ");
      }

      return Ok(city.Name);
  }
