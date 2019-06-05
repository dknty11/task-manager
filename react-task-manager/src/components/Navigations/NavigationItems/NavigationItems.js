import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => (
  <div>
    <NavigationItem toLink="/tasks">Home</NavigationItem>
    <NavigationItem toLink="/new-task">Create</NavigationItem>
    {props.isAuthenticated ? (
      <NavigationItem toLink="/signout" exact>
        Logout
      </NavigationItem>
    ) : (
      <NavigationItem toLink="/signup">Sign Up</NavigationItem>
    )}
  </div>
);

export default navigationItems;
