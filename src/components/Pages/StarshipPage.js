import React from 'react';
import {
  StarshipsList,
} from '../SWlists'

import { withRouter } from 'react-router-dom'

const StarshipPage = ({history}) => {
  return(
    <StarshipsList
      renderItem={(item) =>{ return `${item.name} (manufacturer: ${item.manufacturer})`}}
      onItemSelected={(itemId) => {
        const newPath = `/starships/${itemId}`
        history.push(newPath)
      }}
    />
  )
}

export default withRouter(StarshipPage);