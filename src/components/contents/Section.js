import React from 'react';
import { Alert, Button, Row, Col, Image, Table, ProgressBar } from 'react-bootstrap';
import Profile from './profile-image.jpg';
import Photo from './photo.jpg';
import './contents.css';
import myData from './Store';
import Layout from '../Layout';

export const Intro = () =>{
    return(
        <Layout>
            <div className='intro-wrapper'>
                <div className='intro-background'>    
                </div>
                <div className = "intro-info">
                    <div className="intro-image">
                        <Image src={Profile} alt="Profile" roundedCircle width="200" height="200" className='intro-img' />
                    </div>
                    <div className='intro-detail'>
                        <h1>INYA <span>JOHNSON</span></h1>
                        <h5>I'm a Software Developer</h5>
                    </div>
                </div> 
            </div>
        </Layout>
    )
}

export const About = () => {
    return(
        <Layout>
            <Col className='about'>
                <span></span><h1 className="header">ABOUT ME</h1>
                <Row>
                    <Col md={5} className="about-photo">
                        <Image src={Photo} alt="Profile Photo" className='photo' width="300px" height="300px"  />
                    </Col>
                    <Col md={7} className="about-detail">
                        <div>
                            Hello! <span className="about-name">Inya Johnson</span> is my name, a very passionate and dedicated Full Stack Developer. 
                            With almost 2 years experience as a professional developer, 
                            I have being exposed to a wide variety of technology in my career, 
                            and have acquired skills and knowledge necessary to make your project a success. 
                            I enjoy every step of the design process, from discussion and collaboration to concept and execution,
                            but I find the most satisfaction in seeing the finished product do everything for you that it was created to do and
                            delivered on time.
                        </div>
                        <div className="contact">
                            <Row>
                                <Col md={6} className='contact-info'>
                                    <strong>City:</strong> Lagos, Nigeria.
                                </Col>
                                <Col md={6} className='contact-info'>
                                <strong>Interest:</strong> Soccer, Music
                                </Col>
                                <Col md={6} className='contact-info'>
                                    <strong>Phone:</strong> +234 8134 822 658
                                </Col>
                                <Col md={6} className='contact-info'>
                                <strong>Email:</strong> intoajohnson@gmail.com
                                </Col>
                                <Col md={6} className='contact-info'>
                                    <strong>Git-repo : </strong> 
                                    <Alert.Link href="https://github.com/inyaJohnson/" className='links' rel="noreferrer noopener" target="_blank">
                                        View Git-Repo
                                    </Alert.Link> 
                                </Col>
                                <Col md={6} className='contact-info'>
                                    <strong>Linkedin : </strong>
                                    <Alert.Link href="https://www.linkedin.com/in/johnson-inya-07099814a" className='links' rel="noreferrer noopener" target ="_blank">
                                        View Linkedin Profile
                                    </Alert.Link>
                                </Col>
                            </Row>
                        </div>

                        <div>
                            <Alert.Link href="#" rel="noreferrer noopener" target="_blank">
                                <Button className="download-button">Download CV</Button>
                            </Alert.Link>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Layout>
    )
}

export const Education = () => {
    const{education} = myData.data;
    return (
        <Layout>
            <Col xs={{span:12}} className="education">
                <h1 className="header">EDUCATION</h1>
                    {
                        education.map((index, key) => 
                        <div className='level' key = {key}>
                            <div className='school'><h5>{index.institution}</h5><small>{index.year}</small></div>
                            <div className='detail'>{index.degree}</div>
                            <div>{index.detail}</div>
                        </div>
                        )
                    }
            </Col>
        </Layout>
    );
}


export const Experience = () => {
    const {experience} = myData.data;
    return (
        <Layout>
            <Col md ={12} className='experience'>
                <h1 className="header">EXPERIENCE</h1>
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>Organisation</th>
                            <th>Task Achieved</th>
                        </tr>
                    </thead>
                    <tbody>{
                        experience.map((index, key) => 
                        <tr className="experience" key={key}>
                            <td>{index.organisation} as <strong>{index.position}</strong></td>
                            <td>
                                <Table>
                                    <tbody>
                                        <ul>
                                        {index.task.map((task, key) => 
                                            <li className='task' key ={key}>
                                                {task}
                                            </li>
                                            
                                        )}
                                        </ul>
                                    </tbody>
                                </Table>
                            </td>
                        </tr>
                    )
                    }
                    </tbody>
                </Table>
            </Col>
        </Layout>
            
    );
}

export const Projects = () =>{
    const{project} = myData.data;
    return(
        <Layout>
            <Col xs={{span:12}} className="projects">
            <h1 className="header">PROJECTS</h1>
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
        </Layout>

    );
}


export const Skills = () => {
    const{skills} = myData.data;
    return(
        <Layout>
            <Col xs={{span:12}} className='skills'>
                <h1 className="header">SKILLS</h1>
                <Row>
                    <Col md={5}>
                        <div className="skill-detail">
                            To date, my experience as an software developer has been extremely rewarding and productive. 
                            However, it is through strategic thinking that I can use my analytical aptitude and creative 
                            problem solving skills to their fullest. The skills stated in the chart have made 
                            me use tools like PHPStorm, Visual Studio Code, Notepad++, Lucid Chart and Git, also armed me to 
                            mastering numerous design skills like Procedural Programming, Funtional programming and 
                            Object Oriented Programming.
                        </div>
                    </Col>
                    <Col md={7} className="skill-detail">
                         
                        {
                            skills.map((index, key) =>
                            <Row className="skill" key={key}>
                                {/* <Col md={{span:10}}>{index.description}</Col> <Col className="strength" md={{span :2}}>{index.strength}%</Col> */}
                                <Col className='skill-strength'>
                                    <span className='skill-description'>{index.description}</span> 
                                    <span>{index.strength}%</span>
                                </Col>
                                <Col md={12}>
                                    <ProgressBar now ={index.strength} />
                                </Col> 
                            </Row>
                            )
                        }
                    </Col>
                </Row>
                    
            </Col>
        </Layout>
    )
}