import React from 'react';
import './Greeting.css';

const Greeting = ({ name }) => (
  <div className="greeting-block">
    <span className="hey-pixel">Hi,</span>
    <b className="name-cube">{name}!</b>
  </div>
);

export default Greeting;