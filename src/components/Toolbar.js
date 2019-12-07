import React from 'react';  
import './toolbar.css';
import {NavLink} from 'react-router-dom';
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
    </div>
</div>
);