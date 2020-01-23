import React, { Component } from 'react';
import RowBlock from '../RowBlock'
import {
  PersonList,
  PersonDetails,
} from '../SWlists'

export default class PersonPage extends Component {
  state = {
    selectedItem: 1
  }

  onItemSelected = (selectedItem) => {
    this.setState({
      selectedItem,
    })
  }

  render() {
    const personList = (<PersonList
      renderItem={(item) =>{ return `${item.name} (height: ${item.height})`}}
      onItemSelected={this.onItemSelected}
    />)
    const personDetails = <PersonDetails selectedItem={this.state.selectedItem}/>
    return(
      <RowBlock leftblock={personList} rightBlock={personDetails}/>
    )
  }
}