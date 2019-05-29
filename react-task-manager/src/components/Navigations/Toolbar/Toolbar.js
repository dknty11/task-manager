import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './Toolbar.css'

const Toolbar = (props) => (
  <header className="ToolBar">
    <Logo height="50px" />
    <NavigationItems
      isAuthenticated={props.isAuthenticated}
    />
  </header>
)

export default Toolbar;