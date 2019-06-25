import { GETLIST, CHGINPUT, ADDTODO, DELTODO } from './actionTypes';
export const getList = (data) => {
  return {
    type: GETLIST,
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
