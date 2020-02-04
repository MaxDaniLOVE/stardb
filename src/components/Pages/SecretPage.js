import React from 'react';
import {Redirect} from 'react-router-dom'

const SecretPage = ({isLoggedIn}) => {
  if (isLoggedIn) {
    return <span style={{marginTop: '15px'}}>You've opened secret page!</span>
  } else {
    return <Redirect to="/login/"/>
  }
}

export default SecretPage;