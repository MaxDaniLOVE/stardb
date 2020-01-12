import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner'
import './ItemList.css'

export default class ItemList extends Component{
  swapiService = new SwapiService()
  state = {
    peopleList: null,
  }
  componentDidMount() {
    this.swapiService.getAllPeople().then((peopleList) => {
      this.setState({
        peopleList,
      })
    });
  }

  render() {
    const { peopleList } = this.state;
    const {onPersonSelect, selectedPerson} = this.props;
    if (!peopleList) {
      return <Spinner />
    }  
    const allPeople = peopleList.map(({id, name})=> {
      const newClassName = id === selectedPerson ? "list-group-item item-list_item active-item" : "list-group-item item-list_item"
      return (
      <li
        className={newClassName}
        key={id}
        onClick={() => onPersonSelect(id)}
        >
        {name}
      </li>
      )
    });
    return (
      <ul className="list-group item-list">
       {allPeople}
      </ul>
    )
  }
}
