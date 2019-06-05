import React from "react";

import "./Task.css";

const task = props => {
  return (
    <div className="Task" draggable onDragEnd={props.dragged}>
      <div className="portlet-header">
        <span>task name: {props.task.title}</span>
      </div>
      <div className="portlet-content">
        <span>status: {props.task.status}</span>
        <span>description: {props.task.description}</span>
        <span>created at: {props.task.createdAt}</span>
      </div>
    </div>
  );
};

export default task;
