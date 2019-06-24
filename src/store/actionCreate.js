import { PLUS, JIAN } from './actionType';

export const plus = (value) => {
  return {
    type: PLUS,
    value
  }
}

export const jian = (value) => {
  return {
    type: JIAN,
    value
  }
}
