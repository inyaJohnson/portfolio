import React from 'react';
import './button.css';
export const Button = (props) =>
(
    <button className='toggle-button' onClick={props.click}>
        <div className='toggle-button-line'></div>
        <div className='toggle-button-line'></div>
        <div className='toggle-button-line'></div>
    </button>
);
