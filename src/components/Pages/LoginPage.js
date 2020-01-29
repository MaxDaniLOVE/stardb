import React from 'react';
import {Redirect} from 'react-router-dom'

const LoginPage = ({isLoggedIn, onLog}) => {
  if (isLoggedIn) {
    return <Redirect to="/secretpage/"/>
  }
  return(
    <div className="jumbotron">
      <span>Please login</span>  
      <button
      className="btn btn-success"
      onClick={onLog}>LogIn</button>
    </div>
  )
}

export default LoginPage;