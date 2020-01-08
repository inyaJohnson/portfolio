import React, { Component } from 'react';
import { Toolbar } from './Toolbar';
import Nav from './Nav';
import { Sidebar } from './Sidebar';
import {Backdrop} from './Backdrop';
import { Container, Row, Col } from 'react-bootstrap';


class Layout extends Component{
  state = {
    openSideBar : false
  };
  onSidebarClickHandler = () =>{
    this.setState((prevState) => {
      return{openSideBar : !prevState.openSideBar}
    })
  };

  onBackdropClickHandler = () =>{
    this.setState({
      openSideBar:false
    })
  }

  render(){
  let backdrop;
    if(this.state.openSideBar){
      backdrop = <Backdrop backdropClick = {this.onBackdropClickHandler}/>
    }
  const { children } = this.props;
  return(
    <Container fluid className= 'App'>
        <Row className='menu-nav-xs'>
          <Col xs={12}>
            <Nav sidebarClick = {this.onSidebarClickHandler} />
            <Sidebar showSidebar = {this.state.openSideBar}/>
            {backdrop}
          </Col>
        </Row>
        <Row>
          <Col md={{span:3}} className='menu-nav' >
            <Toolbar />
          </Col>
          <Col md={{offset:3, span:9}} className='children'>
            {children} 
          </Col>
        </Row>    
    </Container>
  )
  }
}

export default Layout;
