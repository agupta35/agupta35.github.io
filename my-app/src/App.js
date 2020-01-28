import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import About from './Components/About.js'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import Car from './Components/Carouselcomp'
import './App.css';
import Sidebar from './Components/Sidebar';
import Timeline from './Components/Timeline.js';

class App extends Component{
render(){
  return (
  <Container fluid={true}>
    <Sidebar />
    <div class="main-content">
        <Car />
        <About />
        <Timeline />
    </div>  
  </Container>
  );
}
}
export default App;
