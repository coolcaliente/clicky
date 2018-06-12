import React from "react";
import "./Header.css";

const Header = props => (
    <header className="jumbotron jumbotron-fluid mt-5">
        <div className="container text-center">
            <h1 className="display-4">Clicky Game</h1>
            <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
        </div>
    </header>

);

export default Header;
