export default class SwapiService {
  _apiBase = 'https://swapi.co/api'
  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error('asdasdasdasd')
    }
    const data = await res.json();
    return data;
  } 

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results;
  }

  async getPerson(id) {
    const person = await this.getResource(`/people/${id}`)
    return this._trandformPerson(person);
  }

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._trandformPlanet);
  }

  async getPlanets(id) {
    const planet = await this.getResource(`/planets/${id}`);
    return this._trandformPlanet(planet);
  }

  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results;
  }

  async getStarship(id) {
    const ship = await this.getResource(`/starships/${id}`)
    return this._trandformStarship(ship);
  }

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
   return item.url.match(idRegExp)[1];
  }

  _trandformPlanet(planet) {
      const id = this._extractId(planet)
    return {
      id,
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    }
  }

  _trandformPerson(person) {
    const id = this._extractId(person)
    return {
      id,
      name: person.name,
      height: person.height,
      mass: person.mass,
      hairColor: person.hair_color,
      birthYear: person.birth_year,
      gender: person.gender,
      skinColor: person.skin_color,
    }
  }

  _trandformStarship(ship) {
    const id = this._extractId(ship)
    return {
      id,
      name: ship.name,
      manufacturer: ship.manufacturer,
      maxAtmospheringSpeed: ship.max_atmosphering_speed,
      passengers: ship.passengers,
      starshipClass: ship.starship_class,
    }
  }
}

const asdasd = new SwapiService();
asdasd.getStarship(9).then((res) => console.log(res));