import Car from './car';
const initState = {}

export default (state = initState, action) => {
  return {
    car: Car(state.car, action)
  }
}
