import React from 'react';
//import ReactDOM from 'react-dom';

class Props extends React.Component {

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
            state和props之间的主要区别是props不可变的。这就是为什么容器组件应该定义可以更新和更改的状态，而子组件应该只使用props从state传递数据。
        </blockquote>
        <h5>使用props</h5>
        <pre className="hoverable">
       <code className="language-javascript">
            {`
            //App.jsx
            import React from 'react';
            class App extends React.Component {
               render() {
                  return (
                     <div>
                        <h1>{this.props.headerProp}</h1>
                        <h2>{this.props.contentProp}</h2>
                     </div>
                  );
               }
            }

            export default App;
              `}
            </code>
            </pre>
        <pre className="hoverable">
       <code className="language-javascript">
        {`
         //main.js
        import React from 'react';
        import ReactDOM from 'react-dom';
        import App from './App.jsx';
        ReactDOM.render(
        <App headerProp = "我是从App里传过来的Header" contentProp = "我是从App里传过来的Content"/>
        , document.getElementById('app'));
        `}
            </code>
            </pre>
        <div>
            输出结果是
            <br/>
            <ul>
                <li>我是从App里传过来的Header</li>
                <li>我是从App里传过来的Content</li>
            </ul>
        </div>
        <h5>默认的props</h5>
        <p>
            可以直接在组件构造函数上设置默认属性值，而不是将其添加到 reactdom.render()元素中。
        </p>
        <pre className="hoverable">
       <code className="language-javascript">
            {`
            //App.jsx
            import React from 'react';
            class App extends React.Component {
               render() {
                  return (
                     <div>
                        <h1>{this.props.headerProp}</h1>
                        <h2>{this.props.contentProp}</h2>
                     </div>
                  );
               }
            }
           App.defaultProps = {
             headerProp: "我是从App里传过来的Header",
             contentProp:"我是从App里传过来的Content"
          }
          export default App;
              `}
            </code>
            </pre>
        <pre className="hoverable">
       <code className="language-javascript">
        {`
      //main.js
      import React from 'react';
      import ReactDOM from 'react-dom';
      import App from './App.jsx';
      ReactDOM.render(<App/>, document.getElementById('app'));
        `}
            </code>
            </pre>
        <h5>验证props</h5>
        <pre className="hoverable">
       <code className="language-javascript">
        {`
      //App.js
import React from 'react';
class App extends React.Component {
   render() {
      return (
         <div>
            <h3>Array: {this.props.propArray}</h3>
            <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
            <h3>Func: {this.props.propFunc(3)}</h3>
            <h3>Number: {this.props.propNumber}</h3>
            <h3>String: {this.props.propString}</h3>
            <h3>Object: {this.props.propObject.objectName1}</h3>
            <h3>Object: {this.props.propObject.objectName2}</h3>
            <h3>Object: {this.props.propObject.objectName3}</h3>
         </div>
      );
   }
}
App.propTypes = {
   propArray: React.PropTypes.array.isRequired,
   propBool: React.PropTypes.bool.isRequired,
   propFunc: React.PropTypes.func,
   propNumber: React.PropTypes.number,
   propString: React.PropTypes.string,
   propObject: React.PropTypes.object
}
App.defaultProps = {
   propArray: [1,2,3,4,5],
   propBool: true,
   propFunc: function(e){return e},
   propNumber: 1,
   propString: "String value...",
  
   propObject: {
      objectName1:"objectValue1",
      objectName2: "objectValue2",
      objectName3: "objectValue3"
   }
}
export default App;        
        `}
            </code>
            </pre>
        <pre className="hoverable">
       <code className="language-javascript">
        {`
      //main.js
      import React from 'react';
      import ReactDOM from 'react-dom';
      import App from './App.jsx';
      ReactDOM.render(<App/>, document.getElementById('app'));
        `}
            </code>
            </pre>
        <div>
            请注意，App.propTypes里使用的isRequired验证，
            propArray和propBool对象，如果这两个值不存在，会报错误。比如把App.defaultProps对象中的propArray删除成propArray:null，控制台将抛出警告
        </div>
    </div>
    );
    }
}


export default Props;

