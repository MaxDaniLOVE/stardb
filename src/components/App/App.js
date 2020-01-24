import React, { Component } from 'react';
import Header from '../Header'
import RandomPlanet from '../RandomPlanet'
import SwapiService from '../../services/SwapiService';
import PersonPage from '../Pages/PersonPage'
import PlanetPage from '../Pages/PlanetPage'
import StarshipPage from '../Pages/StarshipPage'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css'
import { PersonDetails,
  PlanetDetails,
  StarshipsDetails } from '../SWlists';



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
            <Route path="/" component={() => <h2>Welcome to StarDB</h2>} exact={true}/>
            <Route path="/people/" component={PersonPage} exact/>
            <Route path="/planets/" component={PlanetPage} exact/>
            <Route path="/starships/" component={StarshipPage} exact/>
            <Route
              path="/starships/:id"
              component={({match}) => {
                const { id } = match.params;
                return <StarshipsDetails selectedItem={id}/>
              }}
            />
            <Route
              path="/planets/:id"
              component={({match}) => {
                const { id } = match.params;
                return <PlanetDetails selectedItem={id}/>
              }}
            />
            <Route
              path="/people/:id"
              component={({match}) => {
                const { id } = match.params;
                return <PersonDetails selectedItem={id}/>
              }}
            />
          </Router>
        </div>
    )
  }
}
