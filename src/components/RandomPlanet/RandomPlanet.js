import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner'
import ErrorBlock from '../ErrorBlock'
import './RandomPlanet.css'
import PropTypes from 'prop-types'

export default class RandomPlanet extends Component{
  constructor() {
    super();
    this.swapiService = new SwapiService();
    this.state = {
      planet: {},
      loading: true,
      error: false,
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.updatePlanet, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetChange = (planet) => {
    this.setState({
      planet,
      loading: false,
    })
  }

  onError = (error) => {
    this.setState({
      loading: false,
      error: true,
    })
    console.log(error);
    return 
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 2;
    this.swapiService.getPlanets(id)
      .then((planet) => {this.onPlanetChange(planet)})
      .catch(this.onError)
  }

  render() {
    const { planet, loading, error } = this.state;
    const hasData = !(error || loading)
    const spinner = loading ? <Spinner /> : null;
    const errorBlock = error ? <ErrorBlock /> : null;
    const content = hasData ? <PlanetView planet={planet}/> : null;
    return (
      <div className="random-planet">
        {spinner}
        {errorBlock}
        {content}
      </div>
    )
  }
}


const PlanetView = ({planet})  => {
  const { id, name, population, rotationPeriod, diameter } = planet;
  return(
    <React.Fragment>
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
    </React.Fragment>
  )
}

PlanetView.propTypes ={
  planet: PropTypes.object,
}