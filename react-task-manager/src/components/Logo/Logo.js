import React from 'react';

import BirdLogo from '../../assets/images/bird-logo.png'
import './Logo.css';

const Logo = (props) => (
  <div className="Logo" style={{height: props.height}}>
    <img src={BirdLogo} alt="" />
  </div>
)

export default Logo;