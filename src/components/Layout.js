import React, { Component } from 'react';
import { Toolbar } from './Toolbar';
// import { Sidebar } from './Sidebar';
// import {Backdrop} from './Backdrop';
import { Container, Row, Col } from 'react-bootstrap';


class Layout extends Component{
  // state = {
  //   openSideBar : false
  // };
  // onSidebarClickHandler = () =>{
  //   this.setState((prevState) => {
  //     return{openSideBar : !prevState.openSideBar}
  //   })
  // };

  // onBackdropClickHandler = () =>{
  //   this.setState({
  //     openSideBar:false
  //   })
  // }

  render(){
  //   let backdrop;
  //   if(this.state.openSideBar){
  //     backdrop = <Backdrop backdropClick = {this.onBackdropClickHandler}/>
  //   }
  //   const { children } = this.props;
  //   return (
  //     <div className="App" >
  //       <Toolbar  sidebarClick = {this.onSidebarClickHandler}/>
  //       <Sidebar showSidebar = {this.state.openSideBar}/>
  //       {backdrop}
  //       {children}
  //     </div>
  //   );
  const { children } = this.props;
  return(
    <Container fluid className= 'App'>
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
