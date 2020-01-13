import React, { Component } from "react";
import ItemList from '../ItemList'
import PersonDetails from '../PersonDetails'
import SwapiService from '../../services/SwapiService';
import RowBlock from '../RowBlock'
import ErrorBoundry from '../ErrorBoundry'

import './PersonWrapper.css'


export default class PersonWrapper extends Component{
  state = {
    selectedPerson: 4,
  }

  swapiService = new SwapiService();

  onPersonSelect = (id) => {
    this.setState({
      selectedPerson: id
    })
  }

  render() {
    const {selectedPerson} = this.state;
    const itemList = (<ItemList
      onPersonSelect={this.onPersonSelect}
      selectedPerson={selectedPerson}
      getData={this.swapiService.getAllPeople}
      renderItem={(item) =>{ return `${item.name} (height: ${item.height})`}}
    />)
    const personDetails = (
      <PersonDetails selectedPerson={selectedPerson}/>
    )
    return(
      <ErrorBoundry>
        <div className="person-wrapper">
          <RowBlock leftblock={itemList} rightBlock={personDetails}/>
        </div>
      </ErrorBoundry>
    )
  }
}
