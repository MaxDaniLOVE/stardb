import React from 'react';
import { withRouter } from 'react-router-dom'
import {
  PlanetList
} from '../SWlists'

const PlanetPage = ({history}) => {
  return(
    <PlanetList
      renderItem={(item) =>{ return `${item.name} (diameter: ${item.diameter})`}}
      onItemSelected={(itemId) => {
        const newPath = `/planets/${itemId}`
        history.push(newPath)
      }}
    />
  )
}

export default withRouter(PlanetPage)