import React from 'react';
import ReactDOM from 'react-dom'

import Footer from './footer.jsx';
import Topnav from './topnav.jsx';
import Reactbasis from './reactbasis.jsx';
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

   	var resring=1;
 

    return (
     <div>
        <Topnav />
        <Reactbasis />
          <Footer/>
        </div>
       
      );
   }
}


export default App;

