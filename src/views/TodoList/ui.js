import React, { Component } from 'react'

export default class TodoListUi extends Component {
  render() {
    let { list, onClick } = this.props;
    return (
      <div>
        <h1>则是 TodoListUi</h1>
        {
          list.map(item => {
            return <p key={ item.id } onClick={ onClick }>{ item.todo }</p>
          })
        }
      </div>
    )
  }
}
