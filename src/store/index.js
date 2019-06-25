import { createStore, combineReducers } from 'redux';
import reducer from './reducer';
export default createStore(
  combineReducers({
    todo: reducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__() 
);
