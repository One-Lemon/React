import { TODO } from './actionTypes';
const initState = {
  list: []
}
export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  if (action.type === TODO) {
    console.log(123123)
  }
  return newState;
}
