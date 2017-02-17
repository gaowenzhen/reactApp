import React, { Component, PropTypes } from 'react'

export default class AddTodo extends Component {

   
    render() {
        return (
            <div className="row">
           <div className="input-field col s12 m6">
              <input className="file-path validate" placeholder="请填写内容..." type = 'text' ref = 'input' />
           </div>
            <div className="input-field col s12 m6">        
            <button className="btn green darken-4" onClick = {(e) => this.handleClick(e)}>
               添加
            </button>
            </div>
            
         </div>
        )
    }

   //点击button是执行--属性带入的方法他包含了redux
   //如下
    handleClick(e) {
        const node = this.refs.input
        const text = node.value.trim()       
        //addTodo(text)返回的相当这个={type: 'ADD_TODO',id: 1, text:'aa' }
        this.props.onAddClick(text)
       //点击相当执行了
       //this.props.onAddClick(text) == store.dispatch(addTodo(text))
        node.value = ''
    }
}