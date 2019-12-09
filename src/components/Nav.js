import React from 'react';
import { Button } from './button';
import './button.css';
import Linkedin from './svg/linkedin.svg';
import Facebook from './svg/facebook.svg';
import Github from './svg/github.svg';
import { Alert, Image } from 'react-bootstrap';

const Nav = (props) => {
    return(
        <div className='xs-nav'>
            <Button click = {props.sidebarClick}  />
            <div className='btn'></div>
            <div className='link'>
                <Alert.Link href='https://www.facebook.com/tujailer' target='_blank' rel='noopener noreferrer' ><Image src={Facebook} className='link-img' alt='facebook' /></Alert.Link>
                <Alert.Link href='https://github.com/inyaJohnson/' target='_blank' rel='noopener noreferrer'><Image src={Github} className='link-img' alt='github' /></Alert.Link>
                <Alert.Link href='https://www.linkedin.com/in/johnson-inya-07099814a' target='_blank' rel='noopener noreferrer'><Image src={Linkedin} className='link-img' alt='linkedin' /></Alert.Link>
            </div>
        </div>
    );
}

export default Nav