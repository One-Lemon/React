import { takeEvery, put } from 'redux-saga/effects';
import { getFetchList } from './actionCreate';
import { GETLIST } from './actionType';

function* middleGetList () {
  let response = yield fetch('http://localhost:3003/mideWare');
  let res = yield response.json();
  yield put(getFetchList(res));
}

// 暴露方法
const middleWare = function* () {
  // takeEvey('动作类型', todo); 监听
  yield  takeEvery(GETLIST, middleGetList);
}

export default middleWare;
