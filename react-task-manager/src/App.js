import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Auth from './containers/Auth/Auth';
import Login from './containers/Auth/Login/Login';
import Tasks from './containers/Tasks/Tasks';
import './App.css';

class App extends Component {
  render () {
    return (
      <Switch>
        <Route path="/signup" exact component={Auth} />
        <Route path="/signin" exact component={Login} />
        <Route path="/tasks" component={Tasks} />
      </Switch>
    )
  }
}

export default App;
