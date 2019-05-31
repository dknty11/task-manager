import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import Task from '../../components/UI/Task/Task';
import './Tasks.css';

class Tasks extends Component {
  componentDidMount() {
    this.props.onFetchingTasks()
  }

  onDrag = (event, task) => {
    event.preventDefault();
    this.props.onUpdateTask(task._id, 'moved', 'true')
  }

  render() {
    const finishedTask = this.props.tasks.map(task => {
      if (task.complete && task.status !== 'to do') {
        return (
          <Task
            key={task._id}
            task={task}
          />
        )
      }
    })
    const todoTask = this.props.tasks.map(task => {
      if (task.status === 'to do') {
        return (
          <Task
            key={task._id}
            task={task}
            dragged={(event) => this.onDrag(event, task)}
          />
        )
      }
    })
    const inProgresstask = this.props.tasks.map(task => {
      if (!task.complete) {
        return (
          <Task
            key={task._id}
            task={task}
            dragged={(event) => this.onDrag(event, task)}
          />
        )
      }
    })

    let newTask = null;
    if (this.props.tasks.length === 0 && !this.props.loading) {
      newTask = <Redirect to="/new-task" />
    }

    let redirect = null;
    if (!this.props.isAuthenticated) {
      redirect = <Redirect to="/signup" />
    }
    return (
      <div>
        {newTask}
        {redirect}
        <div className="column">
          <div className="column-center">
            <h4>To do</h4>
          </div>
          {todoTask}
        </div>
        <div className="column">
          <div className="column-center">
            <h4>In Progress</h4>
          </div>
          {inProgresstask}
        </div>
        <div className="column">
          <div className="column-center">
            <h4>Done</h4>
          </div>
          {finishedTask}
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks.taskList,
    loading: state.tasks.loading,
    isAuthenticated: state.auth.tokenId !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchingTasks: () => dispatch(actions.fetchingTasks()),
    onUpdateTask: (id, description, complete) => dispatch(actions.updateTask(id, description, complete))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);