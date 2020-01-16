import ItemList from '../ItemList'
import HocHelper from '../HocHelper'
import SwapiService from '../../services/SwapiService'

const swapi = new SwapiService();

const {
  getAllPeople,
  getAllPlanets,
  getAllStarships
} = swapi;

const PersonList = HocHelper(ItemList, getAllPeople)
const PlanetList = HocHelper(ItemList, getAllPlanets)
const StarshipsList = HocHelper(ItemList, getAllStarships)

export {
  PersonList,
  PlanetList,
  StarshipsList
}