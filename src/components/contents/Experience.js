import React from 'react'
import Layout from '../Layout'
import {Container, Table} from 'react-bootstrap';
import myData from './Store';

const Experience = () => {
    const {experience} = myData.data;
    return (
        <Layout>
            <Container>
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>Organisation/Year</th>
                            <th>Position</th>
                            <th>Task Achieved</th>
                        </tr>
                    </thead>
                    <tbody>{
                        experience.map((index, key) => 
                        <tr className="experience" key={key}>
                            <td>{index.organisation}</td>
                            <td>{index.position}</td>
                            <td>
                                <Table>
                                    <tbody>
                                        {index.task.map(
                                            (task, key) => <tr className='task' key ={key}>
                                                <td>
                                                    {task}
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </Table>
                            </td>
                        </tr>
                    )
                    }
                    </tbody>
                </Table>
            </Container>
            
        </Layout>
    );
}

export default Experience;