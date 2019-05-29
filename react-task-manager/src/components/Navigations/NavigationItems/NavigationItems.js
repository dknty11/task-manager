import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = (props) => (
  props.isAuthenticated
    ? <NavigationItem toLink="/signout" exact>Logout</NavigationItem>
    : <NavigationItem toLink="/signup">Sign Up</NavigationItem>
)

export default NavigationItems;