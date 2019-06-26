import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import createSaga from 'redux-saga';
// 引入
import MideWareReducer from '@/views/mideware/store/reducer' ;
import MideSaga from '@/views/mideware/store/mideSaga';
import TodoReducer from '@/views/todoList/store/reducer';
// 创建中间件
const sagaMiddleware = createSaga();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;
export default createStore(
  combineReducers({
    todo: TodoReducer,
    MideWare: MideWareReducer
  }),
  // composeEnhancers(applyMiddleware(logger, thunk))
  // composeEnhancers(applyMiddleware(thunk))
  composeEnhancers(applyMiddleware(sagaMiddleware)) //使用中间件
  // window.__REDUX_DEVTOOLS_EXTENSION__ &&
  // window.__REDUX_DEVTOOLS_EXTENSION__() 
);
sagaMiddleware.run(MideSaga);
