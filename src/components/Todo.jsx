import React, { Component, PropTypes } from 'react'
//props属性已经绑定了onDispatch
export default class Todo extends Component {
   render() {    	 
      return (
         <li className="row boomx1">
           <div className="col s8">{this.props.text}</div>
            <div className="col s4">
            <span ref="delbtn" onClick = {this.dellist.bind(this,this.props.id)} className="btn red accent-4">删除</span>
           </div>
         </li>
      )
   }

  dellist(_id){ 
   this.props.onDispatch({type:"DEL_TODO",id:_id});    
  }
}