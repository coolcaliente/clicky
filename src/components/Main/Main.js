import React from "react";
import "./Main.css";

const Main = props => (
    <main className="container text-center">
    {props.children}
    </main>

);

export default Main;