import React, { Component } from "react";
import ItemList from '../ItemList'
import ItemDetails from '../ItemDetails'
import SwapiService from '../../services/SwapiService';
import RowBlock from '../RowBlock'
import ErrorBoundry from '../ErrorBoundry'

import './PersonWrapper.css'


export default class PersonWrapper extends Component{
  state = {
    selectedItem: 4,
  }

  swapiService = new SwapiService();

  onPersonSelect = (id) => {
    this.setState({
      selectedItem: id
    })
  }

  render() {
    const {selectedItem} = this.state;
    const itemList = (<ItemList
      onPersonSelect={this.onPersonSelect}
      selectedItem={selectedItem}
      getData={this.swapiService.getAllPeople}
      renderItem={(item) =>{ return `${item.name} (height: ${item.height})`}}
    />)
    const personDetails = (
      <ItemDetails selectedPerson={selectedItem}/>
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
