import React from 'react';
import {Redirect} from 'react-router-dom'

const SecretPage = ({isLoggedIn}) => {
  if (isLoggedIn) {
    return <span>ur adopted!</span>
  } else {
    return <Redirect to="/login/"/>
  }
}

export default SecretPage;