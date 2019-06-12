import * as actionTypes from "../actions/actionTypes";

const initialState = {
  taskList: [],
  loading: false,
  error: null
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_TASKS_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.FETCHING_TASKS_SUCCESS:
      return {
        ...state,
        taskList: action.tasks,
        loading: false
      };
    case actionTypes.FETCHING_TASKS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case actionTypes.CREATING_TASK_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.CREATING_TASK_SUCCESS:
      return {
        ...state,
        taskList: [...state.taskList, action.task],
        loading: false
      };
    case actionTypes.CREATING_TASK_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case actionTypes.MOVE_TASK:
      const newArray = state.taskList;
      const [updatedTask] = newArray.splice(action.src.index, 1);
      newArray.splice(action.des.index, 0, updatedTask);
      console.log(state.taskList);
      return {
        taskList: newArray,
        loading: false,
        error: null
      };
    default:
      return state;
  }
};

export default tasksReducer;
