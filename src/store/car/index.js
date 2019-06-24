import {
  PLUS,
  JIAN
} from '../actionType';
const initState = {
  goodsList: [{
      id: 1,
      name: 'Apple',
      price: 1
    },
    {
      id: 2,
      name: 'Lemon',
      price: 6
    },
    {
      id: 3,
      name: 'Banana',
      price: 2
    },
    {
      id: 4,
      name: 'Orange',
      price: 4
    }
  ],
  carList: []
} 

export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  let index = state.carList.findIndex(item => item.id === action.value.id);
  switch (action.type) {
    case PLUS:
      // 判断是否存在
      if (index > -1) {
        newState.carList[index].nums++;
        newState.carList[index].total = newState.carList[index].nums * newState.carList[index].price;
      } else {
        let product = action.value;
        product.nums = 1;
        product.total = product.price * product.nums;
        newState.carList.push(product);
      }
      return newState;
    case JIAN:
      if (index < 0) {
        return state;
      }
      if (newState.carList[index].nums > 1) {
        newState.carList[index].nums--;
        newState.carList[index].total = newState.carList[index].nums * newState.carList[index].price;
      } else {
        newState.carList.splice(index, 1);
      }
      return newState;
    default:
      return state;
  }
}
