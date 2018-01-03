import React from 'react';
import './component.css';

let Icon = (props) => (
  <div className="icon-button">
    <img className="icon" src={props.image} alt="star"/>
    <span>{props.text}</span>
  </div>
);

export default Icon;