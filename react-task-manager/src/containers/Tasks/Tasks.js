import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";

import * as actions from "../../store/actions/index";
// import Task from "../../components/UI/Task/Task";
import Column from "./Column/Column";
import "./Tasks.css";

class Tasks extends Component {
  componentDidMount() {
    this.props.onFetchingTasks();
  }

  onDragEnd = result => {
    console.log(result);
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // this.props.tasks.splice(source.index, 1);
    // this.props.tasks.splice(destination.index, 0, draggableId);
    // console.log(this.props.tasks);
    this.props.onMoveTask(destination, source, draggableId);
  };

  render() {
    // const taskList = this.props.tasks.map(task => {
    //   return <TaskList key={task._id} task={task} />;
    // });

    let newTask = null;
    if (this.props.tasks.length === 0 && !this.props.loading) {
      newTask = <Redirect to="/new-task" />;
    }

    let redirect = null;
    if (!this.props.isAuthenticated) {
      redirect = <Redirect to="/signup" />;
    }
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {redirect}
        <Column tasks={this.props.tasks} />
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks.taskList,
    loading: state.tasks.loading,
    isAuthenticated: state.auth.tokenId !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchingTasks: () => dispatch(actions.fetchingTasks()),
    onUpdateTask: (id, description, complete) =>
      dispatch(actions.updateTask(id, description, complete)),
    onMoveTask: (des, src, dragId) =>
      dispatch(actions.moveTask(des, src, dragId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks);
