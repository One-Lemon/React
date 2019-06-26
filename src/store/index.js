import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import reducer from './reducer';
//combineReducers 管理 reducer
// applyMiddleware 使用中间件

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
  combineReducers({
    test: reducer
  }),
  composeEnhancers(applyMiddleware(logger))
  )
