import React,{ Component } from 'react';
import './index.css';
import store from '../../store';
import { plus, jian } from '../../store/actionCreate';

export class CarApp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      goodsList: store.getState().car.goodsList
    }
    store.subscribe(() => {
      this.setState({
        goodsList: store.getState().car.goodsList
      })
    })
  }

  render () {
    return (
      <div className="left">
        <h1>商品内容</h1>
        <ul>
          {
            this.state.goodsList.map(item => {
              return (
                <li key={ item.id }>
                  <p>名称：{ item.name }</p>
                  <p>
                    价格：{ item.price }
                    <button onClick={ store.dispatch.bind(null, jian(item)) }>-</button>
                    <button onClick={ store.dispatch.bind(null, plus(item)) }>+</button>
                  </p>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export class List extends Component {
  constructor (props) {
    super(props);
    this.state = {
      carList: store.getState().car.carList
    }
    store.subscribe(() => {
      this.setState({
        carList: store.getState().car.carList
      })
    })
  }
  render () {
    return (
      <div className="right">
        <h1>购物车内容</h1>
        <ul>
          {
            this.state.carList.map(item => {
              return (
                <li key={ item.id }>
                  <p>名称：{ item.name }</p>
                  <p>单价：{ item.price }</p>
                  <p>数量：{ item.nums }</p>
                  <p>总价：{ item.total }</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
