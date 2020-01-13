import React, { Component } from 'react';
import Header from '../Header'
import RandomPlanet from '../RandomPlanet'
import PersonWrapper from '../PersonWrapper'

import './App.css'

export default class App extends Component{ 

  render() {
    
    return (
      <div className="wrapper">
        <Header />
        <RandomPlanet />
        <PersonWrapper />
      </div>
    )
  }
}
