import React, { Component } from 'react';
import './ItemList.css'

export default class ItemList extends Component{
  render() {
    return (
      <ul className="list-group item-list">
        <li className="list-group-item item-list_item">Luke Skywalker</li>
        <li className="list-group-item item-list_item">Darth Vader</li>
        <li className="list-group-item item-list_item">R2-D2</li>
      </ul>
    )
  }
}
