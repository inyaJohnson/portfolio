import React from 'react';
import { Button } from './button';
import './button.css';

const Nav = (props) => {
    return(
        <div>
            <Button click = {props.sidebarClick} />
        </div>
    );
}

export default Nav