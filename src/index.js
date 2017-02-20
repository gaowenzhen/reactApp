import React from 'react'
import ReactDOM from 'react-dom'  
//路由 
import {browserHistory, Router, Route, IndexRoute} from 'react-router'
//css--框架
import materialize from './css/materialize/css/materialize.min.css'
//本地css
import styles from './css/app.scss'
//代码高亮
import prism from './lib/prism/prism.js'
import prismstyle from './lib/prism/themes/prism-okaidia.css' 
import App from './App.jsx';
import Reactbasis from './reactbasis.jsx';
import Props from './Props.jsx';
import R_router from './Router.jsx';
import Higherorder from './Higherorder.jsx';
import Fluxcont from './Flux.jsx';

 

ReactDOM.render(
 <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Reactbasis} />
         <Route path = "basis" component = {Reactbasis} />
         <Route path = "Props" component = {Props} />
         <Route path = "R_router" component = {R_router} />
         <Route path = "Higherorder" component = {Higherorder} />
         <Route path = "Fluxcont" component = {Fluxcont} />
      </Route>
   </Router>
	, document.getElementById('app'))

