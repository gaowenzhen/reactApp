import React from 'react';
//import ReactDOM from 'react-dom';

class Higherorder extends React.Component {

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
           高阶组件是用于向现有组件添加附加功能的JavaScript函数。这些函数非常灵活，这意味着高阶组件内部无皮肤，就数据等待被用时，会传入新的皮肤，这样就非常的灵活可以起到多用目的，要修改对应功能时，我们不必改变高阶组件。所需要做的就是改变函数就可以了。
高阶组件它实际上是一个函数，它接受一个组件并返回包装原始组件的另一个组件。
例子， MyHOC是仅用于数据传递给更高阶组件，MyComponent的。此函数接受MyComponent，使用newData增强它，并返回将在屏幕上呈现的增强的组件。
        </blockquote>

       <pre className="hoverable">
       <code className="language-javascript">
            {`
           import React from 'react';
          var newData = {
             data: '这里是数据...',
          }

          var MyHOC = ComposedComponent => class extends React.Component {

             componentDidMount() {
                this.setState({
                   data: newData.data
                });
             }
             render() {
                return <ComposedComponent {...this.props} {...this.state} />;
             }
          };

          class MyComponent extends React.Component {
             render() {
                return (
                   <div>
                      <h1>{this.props.data}</h1>
                   </div>
                )
             }
          }

          export default MyHOC(MyComponent);

            `}
            </code>
            </pre> 
            <p>
              运行应用程序后，数据会传递到MyComponent。这功能也可以用属性来实现，当它比较泛，不会拘束属性标下内。
              <br/>
              输出结果是：这里是数据...
            </p> 
            <div>
              用于不同的功能。这些纯函数是函数式编程的本质。一旦你习惯了它，你会注意到你的应用程序变得更容易维护或升级。
            </div>             
         </div>

        );
    }
}


export default Higherorder;

