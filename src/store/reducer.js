import  { GETLIST } from './actionTypes';
const initState = {
  inputVal: '',
  TodoList: [
    { id: 1, todo: '吃饭' }
  ]
}


export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  if (action.type === GETLIST) {
    newState.TodoList = action.data;
  }
  return newState;
}
