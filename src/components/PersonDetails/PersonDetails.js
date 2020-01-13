import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner';
import ErrorButton from '../ErrorButton'
import './PersonDetails.css'

export default class PersonDetails extends Component{
  state = {
    person: null,
    isLoaded: false,
  }
  swapiService = new SwapiService();

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedPerson !== this.props.selectedPerson) {
      this.setState({
        isLoaded: false,
      });
      this.updatePerson();
    }
  }

  updatePerson() {
    const { selectedPerson} = this.props;
    if (!selectedPerson) {
      return;
    }
    this.swapiService
      .getPerson(selectedPerson)
      .then((person) => {
        this.setState({
          person,
          isLoaded: true,
        });
      });

  }

  render() {
    const {person, isLoaded} = this.state;
    if (!isLoaded) {
      return (
        <div className="person-details">
          <Spinner />
        </div>
      )
    }
    if (!person) {
      return <span>Select person fom a list</span>;
    }
    const {name, gender, birthYear, height, id} = person;
    return (
      <div className="person-details">
        <img
          className="person-details_image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt="person-details"
        />
        <div className="person-details_info">
          <h3>{name}</h3> 
          <p>
            <span>Gender: </span> 
            <span>{gender}</span>
          </p>
          <p>
            <span>Birth year: </span> 
            <span>{birthYear}</span>
          </p>
          <p>
            <span>Height: </span> 
            <span>{height}</span>
          </p>
          <ErrorButton />
        </div>
      </div>
    )
  }
}
