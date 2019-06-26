import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'logger';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
  combineReducers({
    test: reducer
  }),
  composeEnhancers(applyMiddleware(logger))
  );


