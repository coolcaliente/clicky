import React from "react";
import "./Nav.css";

const Nav = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top py-3">
        <ul className="navbar-nav container">
            <li className="nav-item col-4 text-center">
                <a className="navbar-brand" href="index.html">
                    <img className="adLogo" src="./assets/images/ADLogo.png" alt="" />
                    Clicky Game!
                </a>
            </li>
            <li className="nav-item col-4 text-center messagetext"> {props.message}</li>
            <li className="nav-item col-4 text-center"> Current Score: {props.score} | Top Score: {props.topScore}</li>
        </ul>
    </nav>
);


export default Nav;