import { GETTODOLIST, CHGINPUT, ADDTODO, DELTODO } from './actionTypes';
export const getTodoist = (data) => {
  return {
    type: GETTODOLIST,
    data
  }
}

export const chgInput = (value) => {
  return {
    type: CHGINPUT,
    value
  }
}

export const addTodo = () => {
  return {
    type: ADDTODO
  }
}

export const delTodo = (id) => {
  return {
    type: DELTODO,
    id
  }
}
