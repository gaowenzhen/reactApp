import React from "react";
//import ReactDOM from 'react-dom';
import { IndexLink, Link } from "react-router";
 

export default class Topnav extends React.Component {

    constructor(props) {
        super(props);

        //覆盖内部的state-----set
        this.state = {
            menus: false,
            menusstyle: {
                transform: "translateX(-100%)"
            }
        }

        this.reclassname = this.reclassnameState.bind(this);

    } 

    //小屏是左边菜单出来--这个功能不够完善
    reclassnameState() {

        this.setState({
            menus: !this.state.menus
        });

        if (!this.state.menus) {
            this.setState({
                menusstyle: {
                    transform: "translateX(0px)"
                }
            });
        } else {
            this.setState({
                menusstyle: {
                    transform: "translateX(-100%)"
                }
            });
        }

    }

    render() {

        //取回props ---用来判断一些状态
        const {location} = this.props;
        var styles="nav-extended orange darken-4";  

     //导航点击后效果对象
        const toplink = {
            js: false,
            css: false,
            html5: false,
            sublink: {
                Props: false,
                basis: false,
                R_router: false,
                Higherorder:false,
                Flux:false
            }
        }

        if (location.pathname == "/" || location.pathname == "basis") {
            toplink.js = true;
            toplink.sublink.basis = true;
        }

        if (location.pathname == "Props") {
            toplink.js = true;
            toplink.sublink.Props = true;
            toplink.sublink.basis = false;
        }

        if (location.pathname == "R_router") {
            toplink.js = true;
            toplink.sublink.R_router = true;
        }

       if (location.pathname == "Higherorder") {
            toplink.js = true;
            toplink.sublink.Higherorder = true;
        }

       if (location.pathname == "Fluxcont") {
            toplink.js = true;
            toplink.sublink.Fluxcont = true;
        }

      return (
    <nav className={styles}>
        <div className="nav-wrapper">
            <a href="#" className="brand-logo">gaowenzhen@msn.com</a>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i onClick={this.reclassname} className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
                <li className={toplink.css ? "active" : "" }>
                   <a href="#">css框架</a>
                </li>
                <li className={toplink.html5 ? "active" : "" }>
                  <a href="#">html5</a>
                </li>
                <li className={toplink.js ? "active" : "" }>
                    <IndexLink to="/">javascript</IndexLink>
                </li>
            </ul>
            <ul onClick={this.reclassname} className="side-nav" style={this.state.menusstyle}>
                <li className={toplink.css ? "active" : "" }>
                     <a href="#">css框架</a>
                </li>
                <li className={toplink.html5 ? "active" : "" }>
                     <a href="#">html5</a>
                </li>
                <li className={toplink.js ? "active" : "" }>
                    <IndexLink to="/">javascript</IndexLink>
                </li>
            </ul>
        </div>
        <div className="nav-content">
            <ul className="tabs tabs-transparent">
                <li className="tab">
                    <IndexLink className={toplink.sublink.basis ? "active" : "" } to="basis">React基础</IndexLink>
                </li>
                <li className="tab">
                    <Link to="Props" className={toplink.sublink.Props ? "active" : "" }>Props验证</Link>
                </li>
                <li className="tab">
                    <Link to="R_router" className={toplink.sublink.R_router ? "active" : "" }>路由器</Link>
                </li>
                <li className="tab">
                <Link to="Higherorder" className={toplink.sublink.Higherorder ? "active" : "" }>高阶组件</Link>
                </li>
                <li className="tab">
                <Link to="Fluxcont" className={toplink.sublink.Fluxcont ? "active" : "" }>Flux concept</Link> 
                </li>
            </ul>
        </div>
    </nav>
        )
    }
}