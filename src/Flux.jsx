import React from 'react';
import ReactDOM from 'react-dom';

//这里要用redux ---set---
import { createStore } from 'redux';
import { Provider } from 'react-redux' ;
import Index from './components/index.jsx';
import todoApp from './reducers/reducers';
//redux ---end---

class FluxCont extends React.Component {

    //构造函数区
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        Prism.highlightAll();
    }

    render() {

        let store = createStore(todoApp);

        return (
            <div className="container flow-text">
        <blockquote>
           Flux是数据是单向的编程概念。此数据进入应用程序，并沿一个方向流过它，直到它在屏幕上数据呈现出来，这个应用我用了是redux，16年近期很火爆，写个笔记是自己学习，互联网这方面教程太多，很多教程都看不懂，一下是自己总结出来redux认识，虽然说不上分析到redux内部写法但灵活用上redux没问题。
        </blockquote>
        <h5>-----本例子-----</h5>
        <Provider store = {store}>
           <Index />
        </Provider> 
        <hr/>
        <h5>为什么用Flux它的优点</h5>
       <ul>
        <li>单向数据流易于理解。</li>
        <li>应用程序更容易维护。</li>
        <li>应用程序组件降低耦合。</li>
      </ul>
       <hr/>
       <h5>Flux Elements--如下概念</h5>
       <ul>
        <li>Actions −（操作）操作被发送到分派器以触发数据流。</li>
        <li>
        Dispatcher − （调度员）这是应用程序的中心枢纽。 所有数据将被分派并发送到stores中。</li>
        <li>
        Store − （存储）是应用状态和逻辑被保持的地方。 每个store都保持特定的状态，它会在需要时更新。</li>
        <li>
        View −  （视图）将从store接收数据并重新呈现应用程序。
        </li>
       </ul>
        <h6>下图中看到此数据流。</h6>
       <div className="valign-wrapper divradius">
          <div className="valign center A">Actions</div>
          <div className="valign center D">Dispatcher</div>
          <div className="valign center S">Store</div>
          <div className="valign center V">View</div>
      </div>
      <div>左————————————————————————————————>右</div>
      <br/>
        <h5>先来一个直观的代码在说明</h5>
       <pre className="hoverable">
       <code className="language-javascript">
            {`
            
           // 定义Reducers，--
           //就处理一个数字功能，这个fn现在和redux没什么关系
           //想象成普通的fn,注意内部的构造提供加减功能
            function Handlenumbers (state, action) {
              //默认是0
              var defaultState = {
                Hnb:0,
              };
              //当传入是空是就用上面的默认值
              state = state || defaultState;
              //这是js switch原生的,注意action.type不能改变比如
              //改成action.type_a,这样不行
              switch (action.type) {
                case 'plus':
                  return {
                    Hnb: state.Hnb + 1
                  };
                case 'Less':
                  return {
                    Hnb: state.Hnb - 1
                  }
                default :
                  return state;
                }
           }

            // store的创建 
            //createStore是从import { createStore } from 'redux';来的
            //把创建好的Handlenumbers放入，得到一个store
            var store = createStore(Handlenumbers);
            
             /*
             继承了redux提供的如下方法

             store.sbucribe ----能监听store内部数据变化就触发一个回调
             store.getState ---读取store数据
             store.dispatch ---更新store里面的state
             store.replaceReducer 替换reducer，改变state修改的逻辑
             */


            // store里面的数据发生改变时，触发的回调函数
            //redux 的Provider会自动触发更新界面，解释的越清楚不好入门
            store.subscribe(function () {              
              console.log(store.getState().Hnb);
            });

            // action: 触发state改变的唯一方法(按照redux的设计思路)
            var action1 = { type: 'plus' };
            var action2 = { type: 'plus' };
            var action3 = { type: 'Less' };

            // 执行如下改变store里面的state方法
            store.dispatch(action1); // 输出1
            store.dispatch(action2); // 输出2
            store.dispatch(action3); // 输出1

    //-------------------------------------------------

            //另外怎么刷新了视图，看如下精简后的代码
            
             //main.jsx
             import { Provider } from 'react-redux';
             import Index from './index.jsx';
             //注意把上面创建好的Handlenumbers用上,省去
             var Handlenumbers=function(){return {...}}
             let store = createStore(Handlenumbers);
             <Provider store = {store}>
              <Index />
             </Provider>
            //-----------------------------------
            //index.jsx
            import { connect } from 'react-redux'
            class Index extends Component {
             render() { 
             //这里能取出--visibleTodos相当于state.todos 
             const { dispatch, visibleTodos } = this.prop;
             var action1 = { type: 'plus' };
                return (
                        <div> 
                        <h5>
                        写入--触发，思路如这里加了click
                        那action1就不停的变化，那输出也不停的变化
                        改变main.jsx内Handlenumbers--state
                        </h5>
                        {dispatch(action1)}
                        <hr/>
                         <h5>输出</h5>
                         <p>
                          {visibleTodos.Hnb}
                         </p>
                        </div>
                       ) 

               }
             }

            //主页这里的导出用了connect
            //把state.todos给visibleTodos
            function select(state) {
             return {
                  visibleTodos: state.todos
                   }
             }
             export default connect(select)(Index)        

            `}
         </code>
        </pre>
        <div>
          <h6>redux -- 除了上面提到的，另外还有很功能如下的</h6>
          <ul>
            <li>combineReducers能把多个Reducer合并一个</li>
             <li>state.replaceReducer还能替换reducer内部改变state修改的逻辑</li>
          </ul>
        </div>              
      </div>
        );
    }
}


export default FluxCont;

