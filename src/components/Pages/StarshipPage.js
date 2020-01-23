import React, { Component } from 'react';
import RowBlock from '../RowBlock'
import {
  StarshipsList,
  StarshipsDetails
} from '../SWlists'

export default class StarshipPage extends Component {
  state = {
    selectedItem: 11
  }

  onItemSelected = (selectedItem) => {
    this.setState({
      selectedItem,
    })
  }

  render() {
    const personList = (<StarshipsList
      renderItem={(item) =>{ return `${item.name} (manufacturer: ${item.manufacturer})`}}
      onItemSelected={this.onItemSelected}
    />)
    const personDetails = <StarshipsDetails selectedItem={this.state.selectedItem}/>
    return(
      <RowBlock leftblock={personList} rightBlock={personDetails}/>
    )
  }
}