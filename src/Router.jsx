import React from 'react';
import ReactDOM from 'react-dom';

class R_router extends React.Component {

    //构造函数区
    constructor(props) {
        super(props);

    }

 
    componentDidMount() {
        Prism.highlightAll();
    }

    render() {


        return (
         <div className="container flow-text">
        <blockquote>
            路由就我们家里公司里用的路由差不多的意思，react应用程序很多组件(模块)的单页应用程序，这些组件可以按不同的点击来装载入主界面中，这时就需要一个管理，就是路由，它可以切换应用界面到主界面中。
        </blockquote>

       <h5>第一步需要安装一个路由组件</h5>
       <pre className="hoverable">
       <code className="language-javascript">
            {`
            //用cmd切换到当前项目的根目录执行如下安装一个react-router
             npm install react-router
            `}
            </code>
            </pre>
       <h5>第二步创建组件</h5>
       <pre className="hoverable">
       <code className="language-javascript">
            {`
            //创建4子个.jsx-文件 --一个main.jsx           
           //App.jsx --是个导航+这个应用的主容器
            import React from 'react';
            import ReactDOM from 'react-dom';
            //这里只要一个Link就可以用连接用
            import { Link } from "react-router"; from 'react-router'
            class App extends React.Component {
               render() {
                  return (
                     <div>
                       <h5>this.props.children所有的子对象</h5>
                        <ul>
                           <li><Link to="Home">Home</Link></li>
                           <li><Link to="About">About</Link></li>
                           <li><Link to="Contact">Contact</Link></li>
                        </ul>                            
                       {
                        //这里是未来路由切换是填充到这里
                        this.props.children
                       }
                     </div>
                  )
               }
            }
            export default App;
           //---------------------------------------
           //Home.jsx
           import React from 'react';
           import ReactDOM from 'react-dom';
             class Home extends React.Component {
               render() {
                  return (
                     <div>
                        <h1>Home...</h1>
                     </div>
                  )
               }
            }

            export default Home;

          //---------------------------------------
          //About.jsx
           import React from 'react';
           import ReactDOM from 'react-dom';
            class About extends React.Component {
               render() {
                  return (
                     <div>
                        <h1>About...</h1>
                     </div>
                  )
               }
            }

            export default About;
           //---------------------------------------
           //Contact.jsx

            class Contact extends React.Component {
               render() {
                  return (
                     <div>
                        <h1>Contact...</h1>
                     </div>
                  )
               }
            }
            export default Contact;

            //如下是主入口
            //main.jsx --文件
            import React from 'react'
            import ReactDOM from 'react-dom' 
            //路由
            import {Router,Route,Link,browserHistory,IndexRoute} from 'react-router'
            //还要引入对应的模块--就认为是当前根目录
            import App from './App.jsx';
            import Home from './Home.jsx';
            import about from './about.jsx';
            import Contact from './Contact.jsx';
            //IndexRoute是默认加载Home界面
            //path = "home" 这是等待导航里的 Link to="Home"点击后在这个位置渲染
               ReactDOM.render((
               <Router history = {browserHistory}>
                  <Route path = "/" component = {App}>
                     <IndexRoute component = {Home} />
                     <Route path = "home" component = {Home} />
                     <Route path = "about" component = {About} />
                     <Route path = "contact" component = {Contact} />
                  </Route>
               </Router>
                
            ), document.getElementById('app'))

            `}
            </code>
            </pre>               
         </div>

        );
    }
}


export default R_router;

