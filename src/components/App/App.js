import React, { Component } from 'react';
import Header from '../Header'
import RandomPlanet from '../RandomPlanet'
import SwapiService from '../../services/SwapiService';
import PersonPage from '../Pages/PersonPage'
import PlanetPage from '../Pages/PlanetPage'
import StarshipPage from '../Pages/StarshipPage'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import LoginPage from '../Pages/LoginPage';
import SecretPage from '../Pages/SecretPage';

import './App.css'
import { PersonDetails,
  PlanetDetails,
  StarshipsDetails } from '../SWlists';



export default class App extends Component{ 
  state = {
    selectedPerson: 11,
    isLoggedIn: false
  }

  onLog = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  swapiService = new SwapiService();
  render() {
    return (
        <div className="wrapper">
          <Router>
            <Header />
            <RandomPlanet />
            <Switch>
              <Route path="/" component={() => <h2>Welcome to StarDB</h2>} exact={true}/>
              <Route path="/people/" component={PersonPage} exact/>
              <Route path="/planets/" component={PlanetPage} exact/>
              <Route path="/starships/" component={StarshipPage} exact/>
              <Route
                path="/secretpage/"
                component={() => {
                  return <SecretPage isLoggedIn={this.state.isLoggedIn}/>
                }} 
                exact/>
              <Route
                path="/login/"
                component={() => {
                  return <LoginPage isLoggedIn={this.state.isLoggedIn} onLog={this.onLog}/>
                }} 
                exact/>
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
              <Route component={() => {
                return <h2>Page not found!</h2>
              }} />
            </Switch>
          </Router>
        </div>
    )
  }
}
