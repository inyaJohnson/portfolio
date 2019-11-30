import React from 'react'
import Layout from '../Layout'
import {Row, Col, Table} from 'react-bootstrap';
import myData from './Store';
import './contents.css';

const Education = () => {
    const{education} = myData.data;
    return (
        <Layout>
            <Row>
                <Col xs={{span:12}} className="eduction">
                    <Table bordered hover>
                        <thead>
                            <tr>
                                <td>Degree</td>
                                <td>Institution</td>
                                <td>Year</td>
                            </tr>
                        </thead>
                        <tbody>{
                            education.map((index, key) => 
                            <tr className="degree" key = {key}>
                                <td>{index.degree}</td>
                                <td>{index.institution}</td>
                                <td>{index.year}</td>
                            </tr>
                            )
                        }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Layout>
    );
}

export default Education;