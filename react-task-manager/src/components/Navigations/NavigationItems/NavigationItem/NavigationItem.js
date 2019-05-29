import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationItem = (props) => (
  <NavLink to={props.toLink} exact={props.exact}>{props.children}</NavLink>
)

export default NavigationItem;