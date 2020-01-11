import React from 'react';
import './ErrorBlock.css';
import sadFace from './sad.png'

const ErrorBlock = () => {
  return(
    <div className="error-block">
      <img src={sadFace} alt="error" className="error-block_image"></img>
      <p>Oops! Something wrong!</p>
      <p>Refresh page.</p>
    </div>
  )
}

export default ErrorBlock;
