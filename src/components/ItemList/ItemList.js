import React, { Component } from 'react';

import Spinner from '../Spinner'
import './ItemList.css'

export default class ItemList extends Component{
  
  state = {
    itemList: null,
  }
  componentDidMount() {
    const {getData} = this.props;
    
    getData().then((itemList) => {
      this.setState({
        itemList,
      })
    });
  }

  render() {
    const { itemList } = this.state;
    const {onPersonSelect, selectedPerson} = this.props;
    if (!itemList) {
      return <Spinner />
    }  
    const allPeople = itemList.map((item)=> {
      const { id } = item;
      const label = this.props.renderItem(item)
      const newClassName = id === selectedPerson ? "list-group-item item-list_item active-item" : "list-group-item item-list_item"
      return (
      <li
        className={newClassName}
        key={id}
        onClick={() => onPersonSelect(id)}
        >
        {label}
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
