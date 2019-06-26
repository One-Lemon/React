import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import { TodoListWrap, TodoInput } from './style';
import { chgInput, addTodo, delTodo } from './store/actionCreate';
import store from '@/store';

export default class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      inputVal: store.getState().todo.inputVal,
      TodoList: store.getState().todo.TodoList
    }
    store.subscribe(() => {
      this.setState({
        inputVal: store.getState().todo.inputVal,
        TodoList: store.getState().todo.TodoList
      })
    });
  }
  chgInput = (e) => {
    let value = e.target.value;
    store.dispatch(chgInput(value));
  }
  add = () => {
    if (this.state.inputVal.trim() === '') {
      return;
    }
    store.dispatch(addTodo());
  }
  enter = (e) => {
    if (e.keyCode === 13) {
      this.add();
    }
  }
  del (id) {
    store.dispatch(delTodo(id));
  }
  // componentDidMount () {
  //   fetch('http://localhost:3003/todoList')
  //   .then(response => response.json())
  //   .then(res => {
  //     store.dispatch(getList(res));
  //   })
  // }
  render() {
    let { TodoList, inputVal } = this.state;
    return (
      <TodoListWrap>
        <h1 style={{ textAlign: 'center' }}>TodoList 组件</h1>
        <TodoInput>
          <Input value={ inputVal } onChange={ this.chgInput } onKeyUp={ this.enter }/>
          <Button type="primary" onClick={ this.add }>Click</Button>
        </TodoInput>
        <List
          dataSource={ TodoList }
          renderItem={ item => (
            <List.Item key={ item.id }>
              { item.todo }
              <Button type="danger" size="small" style={{float:'right' }} onClick={ this.del.bind(this, item.id) }>Del</Button>
            </List.Item>
          )}
        />
      </TodoListWrap>
    )
  }
}
