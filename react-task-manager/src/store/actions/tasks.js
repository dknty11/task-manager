import * as actionTypes from "./actionTypes";
import axios from "axios";

export const fetchingTasksStart = () => {
  return {
    type: actionTypes.FETCHING_TASKS_START
  };
};

export const fetchingTasksSuccess = tasks => {
  return {
    type: actionTypes.FETCHING_TASKS_SUCCESS,
    tasks
  };
};

export const fetchingTasksFail = error => {
  return {
    type: actionTypes.FETCHING_TASKS_FAIL,
    error
  };
};

export const fetchingTasks = () => {
  return dispatch => {
    dispatch(fetchingTasksStart());
    const token = localStorage.getItem("token");
    axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
    axios
      .get("http://localhost:3003/tasks")
      .then(res => dispatch(fetchingTasksSuccess(res.data)))
      .catch(err => dispatch(fetchingTasksFail(err)));
  };
};

export const creatingTaskStart = () => {
  return {
    type: actionTypes.CREATING_TASK_START
  };
};

export const creatingTaskSuccess = task => {
  return {
    type: actionTypes.CREATING_TASK_SUCCESS,
    task
  };
};

export const creatingTaskFail = error => {
  return {
    type: actionTypes.CREATING_TASK_FAIL,
    error
  };
};

export const creatingTasks = (title, description, complete) => {
  return dispatch => {
    dispatch(creatingTaskStart());
    const token = localStorage.getItem("token");
    const task = {
      title,
      description,
      complete
    };
    axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
    axios
      .post("http://localhost:3003/tasks", task)
      .then(res => dispatch(creatingTaskSuccess(res.data.task)))
      .catch(err => dispatch(creatingTaskFail(err)));
  };
};

/***************************************************
----------------------UPDATE TASK-------------------
****************************************************/
const update_task_start = () => {
  return {
    type: actionTypes.UPDATE_TASK_START
  };
};

const update_task_success = task => {
  return {
    type: actionTypes.UPDATE_TASK_SUCCESS,
    task
  };
};

const update_task_fail = error => {
  return {
    type: actionTypes.UPDATE_TASK_FAIL,
    error
  };
};

export const updateTask = (id, description, complete) => {
  return dispatch => {
    dispatch(update_task_start());
    const task = {
      description,
      complete
    };
    const token = localStorage.getItem("token");
    axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
    axios
      .patch("http://localhost:3003/tasks/" + id, task)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
};

/***************************************************
----------------------UPDATE TASK-------------------
****************************************************/
export const updateMovedTask = (des, src, id) => {
  return {
    type: actionTypes.MOVE_TASK,
    des,
    src,
    id
  };
};

export const moveTask = (des, src, dragId) => {
  //get task id from server
  return dispatch => {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
    axios
      .get("http://localhost:3003/tasks/" + dragId)
      .then(res => {
        dispatch(updateMovedTask(des, src, res.data));
      })
      .catch(err => console.log(err));
  };
  // return {
  //   type: actionTypes.MOVE_TASK,
  //   des,
  //   src,
  //   dragId
  // };
};
