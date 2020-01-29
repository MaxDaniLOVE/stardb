import React from 'react';

import './ItemList.css'

const ItemList = (props) => {
  const {onItemSelected, selectedPerson, data} = props;
  
  const allPeople = data.map((item)=> {
    const { id, name } = item;
    const newClassName = id === selectedPerson ? "list-group-item item-list_item active-item" : "list-group-item item-list_item"
    return (
    <li
      className={newClassName}
      key={id}
      onClick={() => onItemSelected(id)}
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

export default ItemList