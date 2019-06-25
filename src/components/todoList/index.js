import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import { TodoListWrap, TodoInput } from './style';
import { getList } from '@/store/actionCreate';
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
  componentDidMount () {
    fetch('http://localhost:3003/todoList')
    .then(response => response.json())
    .then(res => {
      store.dispatch(getList(res));
    })
  }
  render() {
    let { TodoList } = this.state;
    return (
      <TodoListWrap>
        <h1>TodoList 组件</h1>
        <TodoInput>
          <Input/>
          <Button type="danger" >Click</Button>
        </TodoInput>
        <List
          dataSource={ TodoList }
          renderItem={ item => (
            <List.Item key={ item.id }>{ item.todo }</List.Item>
          )}
        />
      </TodoListWrap>
    )
  }
}
