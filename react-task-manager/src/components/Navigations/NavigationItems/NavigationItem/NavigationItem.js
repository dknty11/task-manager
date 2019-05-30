import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationItem.css'

const navigationItem = (props) => (
  <div className="NavigationItem">
    <NavLink to={props.toLink} exact={props.exact}>{props.children}</NavLink>
  </div>
)

export default navigationItem;