import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import NewTask from './NewTask/NewTask';

class Tasks extends Component {
  componentDidMount() {
    this.props.onFetchingTasks()
  }

  render() {
    let task = <NewTask />;
    if (this.props.tasks.length !== 0) {
      task = this.props.tasks.map(task => (
        <div key={task._id}>
          <p>task name: {task.title}</p>
          <p>status: {task.status}</p>
          <p>description: {task.description}</p>
          <p>created at: {task.createdAt}</p>
        </div>
      ))
    }

    let redirect = null;
    if (!this.props.isAuthenticated) {
      redirect = <Redirect to="/signup" />
    }
    return (
      <div>
        {redirect}
        {task}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks.taskList,
    isAuthenticated: state.auth.tokenId !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchingTasks: () => dispatch(actions.fetchingTasks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);