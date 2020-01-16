import React from 'react'
import ItemDetails from '../ItemDetails'
import Record from '../Record/Record'
import SwapiService from '../../services/SwapiService'

const swapi = new SwapiService();

const {
  getPerson,
  getPlanets,
  getStarship,
  getPersonImage,
  getStarshipImage,
  getPlanetImage
} = swapi;

const PersonDetails = ({selectedItem}) => {
  return (
    <ItemDetails
    selectedItem={selectedItem}
    getData={getPerson}
    getImageURL={getPersonImage}>
      <Record field={'gender'} label={'Gender: '}/>
      <Record field={'hairColor'} label={'Hair color: '}/>
      <Record field={'birthYear'} label={'Year of birth: '}/>
    </ItemDetails>
  )
}
const PlanetDetails = ({selectedItem}) => {
  return (
    <ItemDetails
    selectedItem={selectedItem}
    getData={getPlanets}
    getImageURL={getPlanetImage}>
      <Record field={'diameter'} label={'Diametr: '}/>
      {/* <Record field={'hairColor'} label={'Hair color: '}/>
      <Record field={'birthYear'} label={'Year of birth: '}/> */}
    </ItemDetails>
  )
}
const StarshipsDetails = ({selectedItem}) => {
  return (
    <ItemDetails
    selectedItem={selectedItem}
    getData={getStarship}
    getImageURL={getStarshipImage}>
      <Record field={'manufacturer'} label={'Manufacturer: '}/>
      {/* <Record field={'hairColor'} label={'Hair color: '}/>
      <Record field={'birthYear'} label={'Year of birth: '}/> */}
    </ItemDetails>
  )
}

export {
  PersonDetails,
  PlanetDetails,
  StarshipsDetails
}