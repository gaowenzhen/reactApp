import React from 'react';
import ReactDOM from 'react-dom'
import { Link } from "react-router";
const topstyle="";

import Footer from './footer.jsx';
import Topnav from './topnav.jsx';

//注意Footer一定要放在-当前的主容器内

class App extends React.Component {

 //构造函数区
  constructor(props) {
    super(props);
  
   }

   //写在构造函数外
   reupdateState(e) {
     
       
   }  
 


   render() {
 
    const { location } = this.props;

    return (
     <div>
        <Topnav location={location}/>         
         {
          //当前是主布局-内放的是未来切换的内容
          this.props.children
         }        
          <Footer/>
    </div>
       
      );
   }
}


export default App;

