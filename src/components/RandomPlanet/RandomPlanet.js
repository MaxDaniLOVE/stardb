import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService';
import './RandomPlanet.css'

export default class RandomPlanet extends Component{
  constructor() {
    super();
    this.swapiService = new SwapiService();
    this.state = {
      planet: {},
    }
    this.updatePlanet = this.updatePlanet.bind(this);
    this.updatePlanet();
  }

  onPlanetChange = (planet) => {
    this.setState({planet})
  }

  updatePlanet() {
    const id = Math.floor(Math.random() * 25) + 2
    this.swapiService.getPlanets(id)
      .then((planet) => {this.onPlanetChange(planet)})
  }

  render() {
    const { planet } = this.state;
    const { id, name, population, rotationPeriod, diameter } = planet;
    return (
      <div className="random-planet">
        <img
          className="random-planet_image"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt="random-planet"
        />
        <div className="random-planet_info">
          <p className="random-planet_planet">
            <span>Planet name: </span>
            <span>{name}</span>
          </p>
          <p>
            <span>Population: </span>
            <span>{population}</span>
          </p>
          <p>
            <span>Rotation period: </span>
            <span>{rotationPeriod}</span>
          </p>
          <p>
            <span>Diameter: </span>
            <span>{diameter}</span>
          </p>
        </div>
      </div>
    )
  }
}
