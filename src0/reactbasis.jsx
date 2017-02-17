import React from "react";
import ReactDOM from 'react-dom'

export default class Reactbasis extends React.Component {

//构造函数区
  constructor(props) {
    super(props);

   //覆盖内部的state-----set
   this.state = {
         data:[{"name":"n1"},{"name":"n2"}],
        elmetinput:"中间部分"
       };
    //覆盖内部的state-----end

    //这里的re_updateState是给dom上用，
    //this.reupdateState是调用类内的(当前class域)
    this.re_updateState = this.reupdateState.bind(this);
  
   }

   //写在构造函数外
   reupdateState(e) {
     //这个react自身的
      this.setState({elmetinput: e.target.value});
   }  
 


   render() { 

   	var myStyle = {
         fontSize: 20,
         color: '#FF0000'
      } 

  return (
  	 <div className="container flow-text">
        <div style={myStyle}>变量style</div>
        <Header />
        <div>
        <input onChange={this.re_updateState} type="text" value={this.state.elmetinput} />
            <span className="red">{this.state.elmetinput}</span>
       </div>
       <div>
         <ul>            
            {
                this.state.data.map(function(itme,_i){
                   return <li key={_i}>{itme.name}</li>
                 })
              }
         </ul>
       </div>
     </div>
     )
}
}


//模块一
class Header extends React.Component {
   render() {
      return (
         <div>
            <h4>我是模块一:Header class</h4>
         </div>
      );
   }
}

 
