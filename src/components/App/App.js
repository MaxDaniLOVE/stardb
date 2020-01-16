import React, { Component } from 'react';
import Header from '../Header'
import RandomPlanet from '../RandomPlanet'
import PersonWrapper from '../PersonWrapper'
import SwapiService from '../../services/SwapiService';

import './App.css'



export default class App extends Component{ 
  state = {
    selectedPerson: null,
  }

  swapiService = new SwapiService();
  render() {
    // const {selectedPerson} = this.state
    // const personDetails = (
    //   <ItemDetails
    //   selectedItem={11}
    //   getData={this.swapiService.getPerson}
    //   getImageURL={this.swapiService.getPersonImage}>
    //     <Record field={'gender'} label={'Gender: '}/>
    //     <Record field={'hairColor'} label={'Hair color: '}/>
    //     <Record field={'birthYear'} label={'Year of birth: '}/>
    //   </ItemDetails>
    // )
    // const starshipDetails = (
    //   <ItemDetails
    //     selectedItem={11}
    //     getData={this.swapiService.getStarship}
    //     getImageURL={this.swapiService.getStarshipImage}
    //     >
    //     <Record field={'starshipClass'} label={'Starship class: '}/>
    //     <Record field={'maxAtmospheringSpeed'} label={'Maximum speed: '}/>
    //     <Record field={'manufacturer'} label={'Manufacturer: '}/>
    //   </ItemDetails>
    // )
    return (
      <div className="wrapper">
        <Header />
        <RandomPlanet />
        <PersonWrapper />
      </div>
    )
  }
}
