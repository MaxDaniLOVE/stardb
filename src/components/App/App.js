import React, { Component } from 'react';
import Header from '../Header'
import RandomPlanet from '../RandomPlanet'
import SwapiService from '../../services/SwapiService';
import PersonPage from '../Pages/PersonPage'
import PlanetPage from '../Pages/PlanetPage'
import StarshipPage from '../Pages/StarshipPage'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css'



export default class App extends Component{ 
  state = {
    selectedPerson: 11,
  }

  swapiService = new SwapiService();
  render() {
    return (
        <div className="wrapper">
          <Router>
            <Header />
            <RandomPlanet />
            <Route path="/people" component={PersonPage}/>
            <Route path="/planets" component={PlanetPage}/>
            <Route path="/starships" component={StarshipPage}/>
          </Router>
        </div>
    )
  }
}
