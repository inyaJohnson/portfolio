import React from 'react';
import {Table, Col, Container} from 'react-bootstrap';
import Layout from '../Layout';
import myData from './Store';
const Skills = () => {
    const{skills} = myData.data;
    return(
        <Layout>
            <Container fluid>
                <Col xs={{span:10, offset:1}}>
                <div>
                    
                </div>
                <Table bordered hover>
                    <h4>Technical Summary</h4>
                    <tbody>
                        {
                            skills.map((index, key) => 
                                    <tr className="skills" key={key}>
                                        <td>{index.title}</td>
                                        <td>{index.description}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </Table>
                </Col>
            </Container>
        </Layout>
    )
}
export default Skills;