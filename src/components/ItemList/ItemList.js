import React from 'react';

import './ItemList.css'
import SwapiService from '../../services/SwapiService';
import HocHelper from '../HocHelper'

const ItemList = (props) => {
  const {onPersonSelect, selectedPerson, data} = props;
  
  const allPeople = data.map((item)=> {
    const { id } = item;
    const label = props.renderItem(item)
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

const {getAllPeople} = new SwapiService();

export default HocHelper(ItemList, getAllPeople)