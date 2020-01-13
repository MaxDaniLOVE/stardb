import React, { Component } from 'react';
import Header from '../Header'
import RandomPlanet from '../RandomPlanet'
import PersonWrapper from '../PersonWrapper'
import ItemList from '../ItemList'
import ItemDetails from '../ItemDetails'
import SwapiService from '../../services/SwapiService';

import './App.css'

export default class App extends Component{ 
  state = {
    selectedPerson: null,
  }

  swapiService = new SwapiService();
  render() {
    const {selectedPerson} = this.state
    return (
      <div className="wrapper">
        <Header />
        <RandomPlanet />
        <PersonWrapper />
        {/* <div className="person-wrapper">
          <ItemList onPersonSelect={this.onPersonSelect} selectedPerson={selectedPerson} 
          getData={this.swapiService.getAllPlanets}
          renderItem={(item) => `${item.name} (diameter: ${item.diameter})`}/>
          <ItemDetails selectedPerson={selectedPerson}/>
        </div>
        <div className="person-wrapper">
          <ItemList onPersonSelect={this.onPersonSelect} selectedPerson={selectedPerson} 
          getData={this.swapiService.getAllStarships}
          renderItem={(item) => `${item.name} (starship class: ${item.starshipClass})`}/>
          <ItemDetails selectedPerson={selectedPerson}/>
        </div> */}
      </div>
    )
  }
}
