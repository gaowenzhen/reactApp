import React from 'react'
import { combineReducers } from 'redux'
import { ADD_TODO,DEL_TODO } from '../actions/actions.js'

//从action内过来的数据-被组装成新到
function todo(state, action) {
   switch (action.type) {
   
      case ADD_TODO:
         return {
            id: action.id,
            text: action.text,
         }
         
      default:
      return state
   }
}

window.console&&window.console.log&&(console.log("%c gaowenzhen@msn.com","color:red"),console.log("github:https://github.com/gaowenzhen"));

//添加数据
function todos(state = [], action) {
   switch (action.type) {
   
      case ADD_TODO:
         return [
            ...state,
            todo(undefined, action)
         ]
       break;
       case DEL_TODO:
        //拿id匹配完再用索引--去删除
        state.map(function(itmes,i){
            if(itmes.id == action.id){
               state.splice(i,1);
            }
        });
        return [...state]        
       
      default:
      return state
   }
}
//合并数据
const todoApp = combineReducers({
   todos
})

export default todoApp