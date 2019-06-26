import { createStore, combineReducers } from 'redux';
import todoReducer from '../views/TodoList/store/reducer';

export default createStore(combineReducers({
  todo: todoReducer
}));
