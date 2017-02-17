import React, { Component, PropTypes } from 'react'
import Todo from './Todo.jsx'

export default class TodoList extends Component {
    render() {
        var totos = [];

        //直接取出this.props.todos数据列表
       // var _onDelitem=this.props.onDelitem;
       
        if (this.props.todos.length > 0) {
            this.props.todos.map((todo) => { 
                totos.push(<Todo onDispatch={this.props.onDispatch} key = {todo.id} {...todo} />)
            });
        } else {
            totos.push(<li key={0}>请在输入框内添加记录...</li>);
        }

        return (
            <ol>
            {totos}
            </ol>
        )
    }
}