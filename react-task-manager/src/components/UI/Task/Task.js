import React from "react";
import { Draggable } from "react-beautiful-dnd";

import "./Task.css";

const task = props => {
  return (
    <Draggable draggableId={props.id} index={props.index}>
      {provided => (
        <div
          className="Task"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="portlet-header">
            <span>task name: {props.task.title}</span>
          </div>
          <div className="portlet-content">
            <span>status: {props.task.status}</span>
            <span>description: {props.task.description}</span>
            <span>created at: {props.task.createdAt}</span>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default task;
