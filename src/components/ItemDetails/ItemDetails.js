import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner';
import ErrorButton from '../ErrorButton'
import './ItemDetails.css'


export default class ItemDetails extends Component{
  state = {
    item: null,
    isLoaded: false,
    image: null
  }
  swapiService = new SwapiService();

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedItem !== this.props.selectedItem) {
      this.setState({
        isLoaded: false,
      });
      this.updatePerson();
    }
  }

  updatePerson() {
    const { selectedItem, getData, getImageURL} = this.props;
    if (!selectedItem) {
      return;
    }
    getData(selectedItem)
      .then((item) => {
        this.setState({
          item,
          isLoaded: true,
          image: getImageURL(selectedItem)
        });
      });

  }

  render() {
    const {item, isLoaded, image} = this.state;
    if (!isLoaded) {
      return (
        <div className="person-details">
          <Spinner />
        </div>
      )
    }
    if (!item) {
      return <span>Select person fom a list</span>;
    }
    const {name} = item;
    return (
      <div className="person-details">
        <img
          className="person-details_image"
          src={image}
          alt="person-details"
        />
        <div className="person-details_info">
          <h3>{name}</h3> 
            {
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, {item})
              })
            }
          <ErrorButton />
        </div>
      </div>
    )
  }
}

