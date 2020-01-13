import React, { Component } from "react";
import ItemList from '../ItemList'
import ErrorBlock from '../ErrorBlock'
import PersonDetails from '../PersonDetails'

import './PersonWrapper.css'


export default class PersonWrapper extends Component{
  state = {
    selectedPerson: 4,
    hasError: false,
  }

  componentDidCatch() {
    this.setState({
      hasError: true,
    })
  }

  onPersonSelect = (id) => {
    this.setState({
      selectedPerson: id
    })
  }

  render() {
    const {selectedPerson} = this.state;
    if (this.state.hasError) {
      return <ErrorBlock />
    }
    return(
      <div className="person-wrapper">
        <ItemList onPersonSelect={this.onPersonSelect} selectedPerson={selectedPerson}/>
        <PersonDetails selectedPerson={selectedPerson}/>
      </div>
    )
    
  }
}