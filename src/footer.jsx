import React from "react";
import ReactDOM from 'react-dom'
 
export default class Footer extends React.Component {

    render() {

    
     var styles="page-footer orange darken-4";

    return (
    <footer className={styles}>
     <div className="footer-copyright">
            <div className="container">
            © 2016 Copyright gaowenzhen@msn.com</div>
          </div>
        </footer>
        )
    }
}
