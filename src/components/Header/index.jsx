import React from 'react';
import './style.css';

import camera from './img/camera.svg';

const Header= () => {
  return (
    <header className="header">
    <h1 className='header__title'>
      <img className="logo" src={camera} alt="Logo" />
      V našem kině právě uvádíme
    </h1>
  </header>
  )

}
  
export default Header;
