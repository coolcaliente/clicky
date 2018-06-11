import React from "react";
import "./ArrestedDevelopmentCard.css";





const ArrestedDevelopmentCard = props => (
    <img className="img-thumbnail mb-3 mr-3 clicked" src={props.image} alt={props.name}
    onClick={() => props.handleIncrement(props.id)}/>
);

export default ArrestedDevelopmentCard;