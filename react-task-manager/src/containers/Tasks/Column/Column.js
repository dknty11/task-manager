import React, { Component } from "react";
import { Droppable } from "react-beautiful-dnd";

import Task from "../../../components/UI/Task/Task";

class Column extends Component {
  render() {
    return (
      <div>
        <p>To do</p>
        <Droppable droppableId="1">
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {this.props.tasks.map((task, index) => (
                <Task key={task._id} task={task} id={task._id} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    );
  }
}

export default Column;
