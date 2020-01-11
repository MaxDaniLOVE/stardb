import React, { Component } from 'react';
import Header from '../Header'
import RandomPlanet from '../RandomPlanet'
import ItemList from '../ItemList'
import PersonDetails from '../PersonDetails'

import './App.css'

export default class App extends Component{
  state = {
    selectedPerson: null
  }

  onPersonSelect = (id) => {
    this.setState({
      selectedPerson: id
    })
  }

  render() {
    const {selectedPerson} = this.state;
    return (
      <div className="wrapper">
        <Header />
        <RandomPlanet />
        <ItemList onPersonSelect={this.onPersonSelect} selectedPerson={selectedPerson}/>
        <PersonDetails selectedPerson={selectedPerson}/>
      </div>
    )
  }
}
