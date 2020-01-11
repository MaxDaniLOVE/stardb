import React, { Component } from 'react';
import './PersonDetails.css'

export default class PersonDetails extends Component{
  render() {
    return (
      <div className="person-details">
        <img
          className="person-details_image"
          src="https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101047623106"
          alt="person-details"
        />
        <div className="person-details_info">
          <h3>R2-D2</h3>
          <p>Gender:</p>
          <p>Birth year:</p>
          <p>Eye color:</p>
        </div>
      </div>
    )
  }
}
