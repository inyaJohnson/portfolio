import React from 'react';  
import {Row, Col, Image} from 'react-bootstrap';
import Profile from './contents/profile-image.jpg'
import './toolbar.css';
import {Link} from 'react-router-dom';
export const Toolbar = (props) =>
(
 <div  className='toolbar'>
    <div className='toolbar-navigation'>
        <Row className='toolbar-initials'>
            <Col xs={{span:12}} className="d-flex justify-content-center">
                <h1>IJ</h1>
            </Col>
            <Col>
                    <div className ='toolbar-name'>INYA JOHNSON TOCHUKWU</div>
                    <div className ='toolbar-title'>FULL STACK WEB DEVELOPER</div>
            </Col>
        </Row>

        <Row className='toolbar-navigation-items'>
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
                <li>
                    <Link to='/contents/projects'>Projects</Link>
                </li>
                <li>
                    <Link to='/contents/skills'>Skills</Link>
                </li>
            </ul>
        </Row>
    </div>
</div>
);