import React from 'react';  
import './toolbar.css';
import { NavLink } from 'react-router-dom';
import { Alert, Image } from 'react-bootstrap';
import Linkedin from './svg/linkedin.svg';
import Facebook from './svg/facebook.svg';
import Github from './svg/github.svg';


export const Toolbar = (props) =>
(
 <div className='toolbar'>
    <div className='toolbar-navigation'>
        <div className='toolbar-initials'>
            <div className="d-flex justify-content-center">
                <h1>IJ</h1>
            </div>
            <div>
                    <div className ='toolbar-name'>INYA JOHNSON </div>
                    <div className ='toolbar-title'>FULL STACK WEB DEVELOPER</div>
            </div>
        </div>

        <nav className='toolbar-navigation-items'>
            <ul>
                <li>
                    <NavLink exact={true} to='/'>HOME</NavLink>
                </li>

                <li>
                    <NavLink activeClassName = "is-active" to='/about'>ABOUT</NavLink>
                </li>

                <li>
                    <NavLink activeClassName = "is-active" to='/education'>EDUCATION</NavLink>
                </li>
                <li>
                    <NavLink activeClassName = "is-active" to='/experience'>EXPERIENCE</NavLink>
                </li>
                <li>
                    <NavLink activeClassName = "is-active" to='/projects'>PROJECTS</NavLink>
                </li>
                <li>
                    <NavLink activeClassName = "is-active" to='/skills'>SKILLS</NavLink>
                </li>
            </ul>
        </nav>

        <div className='link'>
                <Alert.Link href='https://www.facebook.com/tujailer' target='_blank' rel='noopener noreferrer' ><Image src={Facebook} className='link-img' alt='facebook' /></Alert.Link>
                <Alert.Link href='https://github.com/inyaJohnson/' target='_blank' rel='noopener noreferrer'><Image src={Github} className='link-img' alt='github' /></Alert.Link>
                <Alert.Link href='https://www.linkedin.com/in/johnson-inya-07099814a' target='_blank' rel='noopener noreferrer'><Image src={Linkedin} className='link-img' alt='linkedin' /></Alert.Link>
            </div>
    </div>
</div>
);