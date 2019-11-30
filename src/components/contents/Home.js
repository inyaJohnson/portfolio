import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import Profile from './profile-image.jpg';
import Layout from '../Layout';
import './contents.css';

const Home = () =>{
    return(
        <Layout>
            <Row className='home-wrapper'>
                <Col className='home-content'>
                    
                </Col>
                <Col xs={{span:12}} className="d-flex justify-content-center image">
                    <Image src={Profile} alt="Profile" roundedCircle width="250" height="250" />
                </Col>
            </Row>
        </Layout>
    )
}

export default Home;