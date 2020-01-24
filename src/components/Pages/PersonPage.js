import React from 'react';
import { withRouter } from 'react-router-dom'
import {
  PersonList
} from '../SWlists'

const PersonPage = ({history}) => {
  return(
    <PersonList
      renderItem={(item) =>{ return `${item.name} (height: ${item.height})`}}
      onItemSelected={(itemId) => {
        const newPath = `/people/${itemId}`
        history.push(newPath)
      }}
    />
  )
}

export default withRouter(PersonPage);