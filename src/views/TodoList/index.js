// import React, { Component } from 'react';
import { connect } from 'react-redux';
import todoListUi from './ui';
import { todo  } from './store/actionCreate';
// 传递下去的数据 参数,state是仓库中的
const mapStateToProps = state => {
  return {
    list: [
      { id: 1, todo: 'chifan'}
    ]
  }
}
// 传递下去的方法 参数是dispatch
const mapDispatchToProps = dispatch => {
  return {
    onClick () {
      dispatch(todo());
    }
  }
}

// class App extends Component {
//   render () {
//     return (
//       <div>
//         <h1>App</h1>
//       </div>
//     )
//   }
// }
export default connect(mapStateToProps, mapDispatchToProps)(todoListUi);
