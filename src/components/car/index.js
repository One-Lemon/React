import React, { Component } from 'react';
import { CarApp, List } from './zujian';
import './index.css';

class Car extends Component {
  render () {
    return (
      <div>
        <h1>购物车</h1>
        <div className="box">
          <CarApp/>
          <List/>
        </div>
      </div>
    )
  }
}
export default Car;
