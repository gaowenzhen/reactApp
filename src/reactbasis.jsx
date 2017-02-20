import React from "react";
//import ReactDOM from 'react-dom'

export default class Reactbasis extends React.Component {

    //构造函数区
    constructor(props) {
        super(props);

        //覆盖内部的state-----set
        this.state = {
            data: [
                {
                    "id": 1,
                    "name": "gaowenzhen@msn.com",
                    "age": "38"
                },

                {
                    "id": 2,
                    "name": "liwei@msn.com",
                    "age": "30"
                },

                {
                    "id": 3,
                    "name": "liudekuan@msn.com",
                    "age": "40"
                }
            ],
            elmetinput: "输入框例子..."
        };
        //覆盖内部的state-----end

        //这里的re_updateState是给dom上用，
        //this.reupdateState是调用类内的(当前class域)
        this.re_updateState = this.reupdateState.bind(this);

    }

    //写在构造函数外
    reupdateState(e) {
        //这个react自身的
        this.setState({
            elmetinput: e.target.value
        });
    }

    //当前组件被装载完成
    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        var resring = 1;

        var myStyle = {
            fontSize: 20,
            color: '#FF0000'
        }

        var itmes = [{
            "name": "n123"
        }, {
            "name": "n456"
        }];

        return (
            <div className="container flow-text">
        <h2>reactjs笔记分享---基础篇</h2>
        <blockquote>
            react--特点：
            <br/> 一，组件输出的并不是真实的 DOM 节点，而是在于内存之中的一种数据结构，叫做虚拟 DOM （virtual DOM）。
            <br/> 二，只有当它插入新dom文档以后，才会变成真实的 DOM 。React 所有的 DOM 变动，都先在虚拟 DOM 修改，完成后再将实际改变的部分DOM，合在真实 DOM上，这种处理方法的算法叫 DOM diff ，可以加快界面的渲染呈现速度。
            <br/> 当前查看的【项目】应用用的是reactjs写的，typestyle,webpackjs,nodejs环境开发的可以在github上得到源码，
        </blockquote>
        <ol>
            <li>本地必须安装nodejs</li>
            <li><a href="https://github.com/gaowenzhen/reactApp">源码下载</a></li>
            <li>在cmd下安装如下</li>
        </ol>
        <dl>
            <dt>全局安装的</dt>
            <dt> C:\Users\username>npm install -g babel</dt>
            <dt>C:\Users\username>npm install -g babel-cli</dt>
            <dt>C:\Users\username>npm install webpack --save</dt>
            <dt>C:\Users\username>npm install webpack-dev-server --save</dt>
            <dt>安装完成后cd到你下载的项目(根目录)中</dt>
            <dt>执行：npm install //安装全部依赖</dt>
        </dl>
        <h5>render容器内必须有个顶级容器</h5>
        <pre className="hoverable">
            <code className="language-javascript">
            {`
             //App.jsx --例子1
             import React from 'react';
             class App extends React.Component {             
             render() {    
              return (<div><p>这种写法-对</p></div>)
              //return (<div></div><p>这种写法-错</p>)
             }
            }
            export default App;
              `}
            </code>
            </pre>
        <p data-myattribute="somevalue">
            自定义属性data-myattribute
        </p>
        <pre className="hoverable">
            <code className="language-javascript">
            {`
           //App.jsx --例子2
             import React from 'react';
             class App extends React.Component {             
             render() { 
             return (   
              <p data-myattribute ="somevalue">
              这里我添加了自定义属性data-myattribute
              </p>
              ) 
             }
            }
            export default App;
            `}
            </code>
            </pre>
        <hr/>
        <p>
            {9 + 1}--这里放花括号加注释jsx内的写javasript
        </p>
        <pre className="hoverable">
            <code className="language-javascript">
            {`
            //App.jsx --例子3
             import React from 'react';
             class App extends React.Component {             
             render() {
             return (    
              <p>
              {9+1} //输出是10
              </p> 
              )
             }
            }
            export default App; 
             `}
            </code>
            </pre>
        <hr/>
        <p>
            {resring == 1 ? 'True!' : 'False'} jsx里的if语句，这直接用到render内的变量来3目运算
        </p>
        <pre className="hoverable">
          <code className="language-javascript">
            {`
            //App.jsx --例子4
             import React from 'react';
             class App extends React.Component {             
             render() { 
             return (   
              <p>
             //输出True ，是一个3目运算         
              {resring == 1 ? 'True!' : 'False'} 
              </p> 
              )
             }
            }
            export default App;
            `}            
            </code>
            </pre>
        <hr/>
        <h5>样式</h5>
        <p>样式联入有两中注意原来的class不能用了必须用className和style</p>
        <p style={ myStyle}> React建议使用内联样式。当您想要设置内联样式时，您需要使用camelCase语法。React也会自动在特定元素的数字值之后附加px。
        </p>
        <pre className="hoverable">
            <code className="language-javascript">            
            {`
           //App.jsx --例子5
             import React from 'react';
             class App extends React.Component {             
             render() {    
             var myStyle = {
                fontSize: 20,
                color: '#FF0000'
               }
            return (
              <p style = {myStyle}>变量式</p>
              <p className="abcclassname">这里用className代替class</p>
              )
             }
            }
            export default App;
            `}
            </code>
            </pre>
        <hr/>
        <h5>注释</h5>
        <p>
            在jsx的模板内花括号内，也能写注释时始终使用是一个好习惯。
        </p>
        <pre className="hoverable">
            <code className="language-javascript">
            {`
             //App.jsx --例子6
             import React from 'react';
             class App extends React.Component {             
             render() { 
            return (<div>
             {
              //我是注释
              //这是在jsx内写的
              //花括号
             }
             </div>)
             }
            }
            export default App;

              `}
            </code>
            </pre>
        <hr/>
        <h5>输出数组数据时别忘记给子项加key</h5>
        <ul>
            { itmes.map(function(itme, _i) {
                return
                <li key={_i}>{itme.name}</li>
            })}
        </ul>
        <pre className="hoverable">
            <code className="language-javascript">
            {`
             //App.jsx --例子7
             import React from 'react';
             class App extends React.Component {             
             render() {    
           var itmes=[{"name":"n123"},{"name":"n456"}];
            return (<ul>
              {
                  itmes.map(function(itme,_i){
                   return <li key={_i}>{itme.name}</li>
                 })
              }
             </ul>)
             }
            }
            export default App;             
              `}
            </code>
            </pre>
        <hr/>
        <h5>加入模块--Header class</h5>
        <Header/>
        <pre className="hoverable">
            <code className="language-javascript">
            {`
             //App.jsx 内可以多个class --例子8
             // class Header
              class Header extends React.Component {
              render() {
                 return (
               <div>
                  <h4>我是模块一:Header class</h4>
               </div>
               );
               }
              }

             //class--App
             import React from 'react';
             class App extends React.Component {             
             render() { 
            return (
             <h4>jsx模板set...</h4>
             <Header/>
             <h4>jsx模板end...</h4>
             )
             }
            }
            export default App;
              `}
            </code>
            </pre>
        <hr/>
        <h5>输出一个表格，往组件属性</h5>
        <p>
            如下注意：data属性，他是会缀在被调类的this.props下的， 也就是目标组件内直接用：this.props.data.id就可以得数据， 拿当前的this.state去渲染未来的组件。
        </p>
        <table className="highlight">
            <tbody>
                {this.state.data.map((person, i) => <TableRow key={ i} data={ person} />)}
            </tbody>
        </table>
        <hr/>
        <pre className="hoverable">
            <code className="language-javascript">
            {`
  
//注意：this.props.data --这是从组件属性里接回数据         
class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}

 //如下：
         import React from 'react';
             class App extends React.Component {             
             render() {
  this.state.data=[{id:1,name:'xx',age:'22'},{}...] 
 //被map遍历data = {person} --放入data属性内

            return (<table className="highlight">              
                <tbody>
                   {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
                </tbody>
              </table>
)
             }
            }
            export default App;
              `}
            </code>
            </pre>
        <hr/>
        <h5>PropTypes</h5>
        <p>
            组件的属性可以接受任意值，字符串、对象、函数，当然组件也可以定数据义类型，如下是给一个属性强制定义了类型，如不满足就在dug内输出提示。
        </p>
        <pre className="hoverable">
            <code className="language-javascript">
            {`  
            //创建class时
            var Mynames = React.createClass({
              propTypes: {
                //给当前names定义了一个字符串string类型，并且非空
                names: React.PropTypes.string.isRequired
              },

              render: function() {
                 return <h1> {this.props.names} </h1>;
               }
            });

            //用时
            var data = 123;

            ReactDOM.render(
              <Mynames names={data} />,
              document.body
            );


             `}
            </code>
            </pre>
        <h5>form表单交互--</h5>
        <p>
            input输入框，用户时时更新内容，实时刷新到当前界面
            <br/>
            <input onChange={this.re_updateState} type="text" value={this.state.elmetinput} />
            <span className="red">{this.state.elmetinput}</span>
        </p>
        <pre className="hoverable">
            <span>----App.jsx----</span>
            <code className="language-javascript">
            {`
             import React from 'react';
             import ReactDOM from 'react-dom';
            class App extends React.Component {
               constructor(props) {
                  super(props);    
                  this.state = {
                     data: '输入框例子...'
                  }
                  this.updateState = this.updateState.bind(this);
                  
                  this.clearInput = this.clearInput.bind(this);
               };
               updateState(e) {
                  //这里没有用ref直接用event里的target
                  this.setState({data: e.target.value});
               }               
               //修改焦点
                clearInput() {
                    this.setState({data: ''});
                    //ref和refs
                    //在dom属性上写过ref在这里用 refs读回dom
                    ReactDOM.findDOMNode(this.refs.myInput).focus();
                 }
               render() {
                  return (
                     <div>
                        <input ref="myInput" type = "text" value = {this.state.data} 
                           onChange = {this.updateState} />
                        <h4>{this.state.data}</h4>
                     </div>
                  );
               }
            }
            export default App;
              `}
            </code>
            </pre>
        <pre className="hoverable">
            <span>---- main.js----</span>
            <code className="language-javascript">
             {`

            import React from 'react';
            import ReactDOM from 'react-dom';
            import App from './App.jsx';
            ReactDOM.render(<App/>, document.getElementById('app'));

               `}
            </code>
            </pre>
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

//模块二,我是创建表格内部的组件，也可以说是模板。
//TableRow组件被外部组件循环
class TableRow extends React.Component {
    render() {
        return (
            <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
        );
    }
}
