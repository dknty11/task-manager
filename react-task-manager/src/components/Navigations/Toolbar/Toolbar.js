import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './Toolbar.css'

const toolbar = (props) => (
  <header className="ToolBar">
    <div className="Logo1">
      <Logo height="50px" />
    </div>
    <nav className="DesktopOnly">
      <NavigationItems
        isAuthenticated={props.isAuthenticated}
      />
    </nav>
  </header>
)

export default toolbar;