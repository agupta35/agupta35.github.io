import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './Components/Projects'; 
import About from './Components/About'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Nav,Row} from 'react-bootstrap';
import Col from 'react-bootstrap/Col'
import './App.css';

class App extends Component{
render(){
  return (
    <Container fluid={true}>
  <Row noGutters={true}>
  <Col xs={3}>
    <Row noGutters={true}>
    Talk something about me
    </Row>  
    <Row noGutters={true}> 
      <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link eventKey="link-1">About</Nav.Link>
      <Nav.Link eventKey="link-2">Projects</Nav.Link>
      <Nav.Link eventKey="link-3">Resume</Nav.Link>
      </Nav>
    </Row>
  </Col>

  <Col>
  <h1>Two</h1>
  </Col>
  </Row>
</Container>
  );
}
}
export default App;
