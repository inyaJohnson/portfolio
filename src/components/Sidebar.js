import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link to='/'>Home</Link>
                </li>

                <li>
                    <Link to='/contents/education'>Education</Link>
                </li>
                <li>
                    <Link to='/contents/experience'>Experience</Link>
                </li>
                {/* <li>
                    <Link to = '/contents/github'>Contact/Git-Repo</Link>
                </li> */}
                <li>
                    <Link to='/contents/projects'>Projects</Link>
                </li>
                <li>
                    <Link to='/contents/skills'>Skills</Link>
                </li>
            </ul>
        </nav>

    );
}