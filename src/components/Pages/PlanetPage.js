import React, { Component } from 'react';
import RowBlock from '../RowBlock'
import {
  PlanetList,
  PlanetDetails,
} from '../SWlists'

export default class PlanetPage extends Component {
  state = {
    selectedItem: 11
  }

  onItemSelected = (selectedItem) => {
    this.setState({
      selectedItem,
    })
  }

  render() {
    const personList = (<PlanetList
      renderItem={(item) =>{ return `${item.name} (diameter: ${item.diameter})`}}
      onItemSelected={this.onItemSelected}
    />)
    const personDetails = <PlanetDetails selectedItem={this.state.selectedItem}/>
    return(
      <RowBlock leftblock={personList} rightBlock={personDetails}/>
    )
  }
}