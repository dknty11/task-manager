import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import Auth from "./containers/Auth/Auth";
import Login from "./containers/Auth/Login/Login";
import Tasks from "./containers/Tasks/Tasks";
import "./App.css";
import * as actions from "./store/actions/index";
import Logout from "./containers/Auth/Logout/Logout";
import NewTask from "./containers/Tasks/NewTask/NewTask";

class App extends Component {
  componentDidMount() {
    this.props.onTrySignIn();
  }
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/new-task" component={NewTask} />
          <Route path="/signout" component={Logout} />
          <Route path="/tasks" component={Tasks} />
          <Route path="/signup" component={Auth} />
          <Route path="/signin" component={Login} />
        </Switch>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTrySignIn: () => dispatch(actions.tryAutoSignIn())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
