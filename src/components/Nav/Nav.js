import React from "react";
import "./Nav.css";

const Nav = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top py-3">
        <ul className="navbar-nav container">
            <li className="nav-item">
                <a className="navbar-brand" href="#">Clicky Game</a>
            </li>
            <li className="nav-item"> Click on an Image to Play</li>
            <li className="nav-item"> Score: 0 | Top Score: 0</li>
        </ul>
    </nav>
);


export default Nav;