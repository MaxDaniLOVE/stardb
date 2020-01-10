class SwapiService {
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

  getPerson(id) {
    return this.getResource(`/people/${id}`)
  }

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results;
  }

  getPlanets(id) {
    return this.getResource(`/planets/${id}`)
  }

  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results;
  }

  getStarships(id) {
    return this.getResource(`/starships/${id}`)
  }
}

const swapi = new SwapiService();
swapi.getAllStarships().then((data) => {
  data.forEach(element => {
    console.log(element.name);
  });
})

