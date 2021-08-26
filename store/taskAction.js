import { ADD_TASK, DELETE_TASK, DID_TASK } from "./taskTypes";

const addTask = task => ({
  type: ADD_TASK,
  payload: task
})

const deleteTask = id => ({
  type: DELETE_TASK,
  payload: id
})

const didTask = id => ({
  type: DID_TASK,
  payload: id
})

export { addTask, deleteTask, didTask }