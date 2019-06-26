import { GETLIST, GETFETCHLIST } from './actionType';
const initState = {
  list: []
}
export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case GETLIST:
      // newState.list = action.list;
      break;
    case GETFETCHLIST:
      newState.list = action.list;
      break;
    default:
      break;
  }
  return newState;
}
