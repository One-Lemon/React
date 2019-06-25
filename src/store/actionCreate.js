import { GETLIST } from './actionTypes';
export const getList = (data) => {
  return {
    type: GETLIST,
    data
  }
}
