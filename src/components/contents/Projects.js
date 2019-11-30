import React from 'react';
import {Button, Alert, Row, Col} from 'react-bootstrap';
import Layout from '../Layout';
import './contents.css';
import myData from './Store';


const Projects = () =>{
    const{project} = myData.data;
        return(
        <Layout>
            <Row>
                <Col xs={{span:12}} className="projects">
                    {
                        project.map((index, key) =>
                            <div className="project" key={key}>
                                <Alert>
                                    <Alert.Heading className="Alert-Heading">
                                        {index.heading}
                                    </Alert.Heading >
                                    <div>
                                        <div>{index.description.about}</div>
                                        <div>{index.description.goal}</div>
                                        <div className="sub-header"><strong>Technology</strong> - {index.description.technology}</div>
                                        <div className="sub-header"><strong>Duration</strong> - {index.description.time}</div>
                                    </div>
                                    <Alert.Link href={index.link} rel="noreferrer noopener" target="_blank" className="d-flex justify-content-end" >
                                        <Button variant="secondary">View Project</Button>
                                    </Alert.Link>
                                </Alert>
                            </div>
                        )
                    }
                </Col>
            </Row>
        </Layout>
    );
}

export default Projects;