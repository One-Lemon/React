import  { GETLIST, CHGINPUT, ADDTODO, DELTODO } from './actionTypes';
const initState = {
  inputVal: '',
  TodoList: [
    { id: 1, todo: '吃饭' }
  ]
}

export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case GETLIST:
      newState.TodoList = action.data;
      break;
    case CHGINPUT:
      newState.inputVal = action.value;
      break;
    case ADDTODO:
      let last = newState.TodoList.length;
      let id = newState.TodoList[last] + 1;
      let todo = {
        id,
        todo: newState.inputVal
      }
      newState.TodoList.push(todo);
      newState.inputVal = '';
      break;
    case DELTODO:
      let index = newState.TodoList.findIndex( item => item.id === action.id);
      newState.TodoList.splice(index, 1);
      break;
    default:
      break;
  }
  return newState;
}
