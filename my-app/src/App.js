import React, { Component } from 'react';
import logo from './logo.svg';
import profilePicture from './images/myPicture.jpg';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './Components/Projects'; 
import About from './Components/About'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Nav,Row, Image} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Car from './Components/Carouselcomp'
import './App.css';
import Sidebar from './Components/Sidebar';

class App extends Component{
render(){
  return (
  <Container fluid={true}>
    <Sidebar />
    <div class="main-content">
        <Car />
    </div>   
  </Container>
  );
}
}
export default App;
