import React, { Component } from 'react';
import Header from '../Header'
import RandomPlanet from '../RandomPlanet'
import SwapiService from '../../services/SwapiService';
import PersonPage from '../Pages/PersonPage'
import PlanetPage from '../Pages/PlanetPage'
import StarshipPage from '../Pages/StarshipPage'

import './App.css'



export default class App extends Component{ 
  state = {
    selectedPerson: 11,
  }

  swapiService = new SwapiService();
  render() {
    return (
      <div className="wrapper">
        <Header />
        <RandomPlanet />
        <PersonPage />
        <PlanetPage />
        <StarshipPage />
      </div>
    )
  }
}
