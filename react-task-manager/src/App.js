import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Auth from './containers/Auth/Auth';
import './App.css';

class App extends Component {
  render () {
    return (
      <Switch>
        <Route path="/signup" component={Auth} />
      </Switch>
    )
  }
}

export default App;
