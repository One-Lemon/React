import { GETLIST,GETFETCHLIST } from './actionType';
export const getList = () => ({
    type: GETLIST
  })

export const getFetchList = (list) => ({
    type: GETFETCHLIST,
    list
  })

export const fetchList = () => {
  return (dispatch, getState) => {
    fetch('http://localhost:3003/mideWare')
    .then(response => response.json())
    .then(res => {
      dispatch(getList(res));
    })
  }
}
