import React, { Component } from 'react';
import Header from '../Header'
import RandomPlanet from '../RandomPlanet'
import ItemList from '../ItemList'
import PersonDetails from '../PersonDetails'

import './App.css'

export default class App extends Component{
  render() {
    return (
      <div className="wrapper">
        <Header />
        <RandomPlanet />
        <ItemList />
        <PersonDetails />
      </div>
    )
  }
}
