import React from 'react';
import './backdrop.css';

export const  Backdrop  = (props) =>

(
    <div className='backdrop' onClick={props.backdropClick}></div>
);