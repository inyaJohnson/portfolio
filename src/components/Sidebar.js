import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css'

export const Sidebar = (props) => {
    let sidebarClass = 'sidebar-navigation-items';
    if(props.showSidebar){
        sidebarClass = 'sidebar-navigation-items open';
    }
    return(
        <nav className={sidebarClass}>
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

    );
}