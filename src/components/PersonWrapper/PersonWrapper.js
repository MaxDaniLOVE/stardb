import React, { Component } from "react";
import SwapiService from '../../services/SwapiService';
import RowBlock from '../RowBlock'
import ErrorBoundry from '../ErrorBoundry'
import {
  PersonList,
  PlanetList,
  StarshipsList,
  PersonDetails,
  PlanetDetails,
  StarshipsDetails
} from '../SWlists'

import './PersonWrapper.css'


export default class PersonWrapper extends Component{
  state = {
    selectedItem: 20,
  }

  swapiService = new SwapiService();

  onPersonSelect = (id) => {
    this.setState({
      selectedItem: id
    })
  }

  render() {
    const {selectedItem} = this.state;
    const itemList = (<PersonList
      renderItem={(item) =>{ return `${item.name} (height: ${item.height})`}}
    />)
    const starshipList = (<StarshipsList
      renderItem={(item) =>{ return `${item.name} (manufacturer: ${item.manufacturer})`}}
    />)
    const planetList = (<PlanetList
      renderItem={(item) =>{ return `${item.name} (diameter: ${item.diameter})`}}
    />)
    const personDetails = <PersonDetails selectedItem={selectedItem}/>
    const planetDetails = <PlanetDetails selectedItem={3}/>
    const starshipsDetails = <StarshipsDetails selectedItem={5}/>
    return(
      <ErrorBoundry>
        <div className="person-wrapper">
          <RowBlock leftblock={itemList} rightBlock={personDetails}/>
        </div>
        <div className="person-wrapper">
          <RowBlock leftblock={starshipList} rightBlock={starshipsDetails}/>
        </div>
        <div className="person-wrapper">
          <RowBlock leftblock={planetList} rightBlock={planetDetails}/>
        </div>
      </ErrorBoundry>
    )
  }
}
