import React, { Component } from 'react';

import { connect } from 'react-redux'
import { addTodo, delTodo } from '../actions/actions'

import AddTodo from './AddTodo.jsx'
import TodoList from './TodoList.jsx'

class Index extends Component {
   render() {
      //取出组件的属性用this.props--就是Provider的 store
      //抽象理解为分出 dispatch写入,和visibleTodos监听
              
      const { dispatch, visibleTodos } = this.props;

      //dispatch 是通过createStore创建好的
      //store.dispatch()
      //store.visibleTodos()

      /*
     index.jsx是被Flux.jsx引用的如下
     Flux.jsx
      <Provider store = {store}>
           <Index />
     </Provider> 
     给AddTodo 组件加了属性onAddClick并且给他一个，
     未来要执行的方法就是store.dispatch
     如下type kye不能改名
     dispatch({type: 'ADD_TODO',id: 1, text:'' })

      */ 
      return (
         <div>       
         <AddTodo onAddClick = {text => dispatch(addTodo(text))} />
         <h5>输出列表</h5>
           <TodoList onDispatch={dispatch} todos = {visibleTodos}/>         
         </div>
      )
   }
}

function select(state) {
   return {
      visibleTodos: state.todos
   }
}
export default connect(select)(Index)