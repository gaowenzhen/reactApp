import React from 'react'

import ReactDOM from 'react-dom' 
//css--框架
import materialize from './css/materialize/css/materialize.min.css'
//本地css
import styles from './css/app.scss'
//代码高亮
import prism from './lib/prism/prism.js'
import prismstyle from './lib/prism/themes/prism-okaidia.css'
 

import App from './App.jsx';

ReactDOM.render(<App />, document.getElementById('app'))

