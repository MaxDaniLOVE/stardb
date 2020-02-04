import React from 'react';
import {Redirect} from 'react-router-dom'

const LoginPage = ({isLoggedIn, onLog}) => {
  if (isLoggedIn) {
    return <Redirect to="/secretpage/"/>
  }
  return(
    <div className="jumbotron" style={{padding: '15px', marginTop: '15px'}}>
      <span>Please login</span>  
      <button
      className="btn btn-success"
      onClick={onLog}
      style={{marginLeft: '15px'}}>LogIn</button>
    </div>
  )
}

export default LoginPage;