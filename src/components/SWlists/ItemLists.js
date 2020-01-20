import React from 'react'
import ItemList from '../ItemList'
import HocHelper from '../HocHelper'
import SwapiService from '../../services/SwapiService'

const swapi = new SwapiService();

const {
  getAllPeople,
  getAllPlanets,
  getAllStarships
} = swapi;

const withChildFunc = (Wrapped, fn) => {
  return (props) => {
    return (
    <Wrapped {...props}>
      {fn}
    </Wrapped>
    )
  }
}

const ListWithChild = withChildFunc(ItemList, ({name}) => <span>{name}</span>)

const PersonList = HocHelper(ListWithChild, getAllPeople)
const PlanetList = HocHelper(ListWithChild, getAllPlanets)
const StarshipsList = HocHelper(ListWithChild, getAllStarships)

export {
  PersonList,
  PlanetList,
  StarshipsList
}