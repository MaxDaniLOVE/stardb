export default class SwapiService {
  _apiBase = 'https://swapi.co/api'
  _imageAbse = 'https://starwars-visualguide.com/assets/img'
  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error('asdasdasdasd')
    }
    const data = await res.json();
    return data;
  } 

  getAllPeople = async () => {
    const people = await this.getResource(`/people/`);
    return (people.results).map(this._trandformPerson);

  }

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}`)
    return this._trandformPerson(person);
  }

  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    return (res.results).map(this._trandformPlanet);
  }

  getPlanets = async (id) =>  {
    const planet = await this.getResource(`/planets/${id}`);
    return this._trandformPlanet(planet);
  }

  getAllStarships  = async () =>  {
    const res = await this.getResource(`/starships/`);
    return (res.results).map(this._trandformStarship);
  }

  getStarship = async (id) => {
    const ship = await this.getResource(`/starships/${id}`)
    return this._trandformStarship(ship);
  }
  getPersonImage = (id) => {
    return `${this._imageAbse}/characters/${id}.jpg`
  }
  getStarshipImage = (id) => {
    return `${this._imageAbse}/starships/${id}.jpg`
  }
  getPlanetImage = (id) => {
    return `${this._imageAbse}/planets/${id}.jpg`
  }

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _trandformPlanet = (planet) => {
    const id = this._extractId(planet)
    return {
      id,
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    }
  }

  _trandformPerson = (person) => {
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

  _trandformStarship = (ship) => {
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

//  const asdasd = new SwapiService();
//  asdasd.getAllStarships.then((res) => {
//   res.map((e) => console.log(e))
//  });