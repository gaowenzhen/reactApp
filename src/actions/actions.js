export const ADD_TODO = 'ADD_TODO';
export const DEL_TODO = 'DEL_TODO';
  
 
let nextTodoId = 0;

//添加
export function addTodo(text) {
   return {
      type: ADD_TODO,
      id: nextTodoId++,
      text
   };
}

//删除
export function delTodo(id) {
   return {
      type: DEL_TODO,
      id: id
   };
}