import React, { Component } from 'react';
import store from '@/store';
import { getList } from './store/actionCreate';
import { Card, Button } from 'antd';
import { Box, CarList } from './style';
 
// let next = store.dispatch;
// store.dispatch = action => {
//   if (typeof action === 'function') {
//     action(store.dispatch, store.getState);
//   } else {
//     next (action);
//   }
// }

export default class MideWare extends Component {
  constructor (props) {
    super(props);
    this.state = {
      list: store.getState().MideWare.list
    };
    store.subscribe(() => {
      this.setState({
        list: store.getState().MideWare.list
      })
    })
  }
  componentDidMount () { 
    // store.dispatch(fetchList());
    // fetch('http://localhost:3003/mideWare')
    // .then(response => response.json())
    // .then(res => {
    //   store.dispatch(getList(res));
    // })
    store.dispatch(getList()); 
  }
  sync = () => {
    function fn () {
      return new Promise((resolve, rejct) => {
        fetch('http://localhost:3003/mideWare')
        .then(response => response.json())
        .then(res => {
          resolve(res);
        })
      })
    }
    async function  hello () {
      let x = await fn();
      console.log(x);
      console.log('hello');
    }
    hello();
  }

  render () {
    return (
      <Box>
        <h1>这是中间件内容</h1>
        <Button onClick={ this.sync }>Click</Button>
        <CarList>
          {
            this.state.list.map(item => {
              return (
                <Card title={ item.title } extra={<span>More</span>} 
                style={{ width: 300 }} key={ item.id }>
                  <p>{ item.id }</p>
                  <p>{ item.title }</p>
                  <p>{ item.content }</p>
                </Card>
              )
            })
          }
        </CarList>
      </Box>
    )
  }
}
