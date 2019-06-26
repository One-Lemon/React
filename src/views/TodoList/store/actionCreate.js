import { TODO } from './actionTypes';

export const todo = (value) => {
  return {
    type: TODO,
    value
  }
}
