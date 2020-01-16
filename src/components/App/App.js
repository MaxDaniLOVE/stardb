import React, { Component } from 'react';
import Header from '../Header'
import RandomPlanet from '../RandomPlanet'
import PersonWrapper from '../PersonWrapper'
import ItemList from '../ItemList'
import ItemDetails from '../ItemDetails'
import Record from '../Record/Record'
import SwapiService from '../../services/SwapiService';
import RowBlock from '../RowBlock';

import './App.css'



export default class App extends Component{ 
  state = {
    selectedPerson: null,
  }

  swapiService = new SwapiService();
  render() {
    const {selectedPerson} = this.state
    const personDetails = (
      <ItemDetails
      selectedItem={11}
      getData={this.swapiService.getPerson}
      getImageURL={this.swapiService.getPersonImage}>
        <Record field={'gender'} label={'Gender: '}/>
        <Record field={'hairColor'} label={'Hair color: '}/>
        <Record field={'birthYear'} label={'Year of birth: '}/>
      </ItemDetails>
    )
    const starshipDetails = (
      <ItemDetails
        selectedItem={11}
        getData={this.swapiService.getStarship}
        getImageURL={this.swapiService.getStarshipImage}
        >
        <Record field={'starshipClass'} label={'Starship class: '}/>
        <Record field={'maxAtmospheringSpeed'} label={'Maximum speed: '}/>
        <Record field={'manufacturer'} label={'Manufacturer: '}/>
      </ItemDetails>
    )
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
        <RowBlock 
        leftblock={personDetails}
        rightBlock={starshipDetails}/>
      </div>
    )
  }
}
