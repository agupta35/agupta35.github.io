import React, { Component } from 'react';

import About from './Components/About.js'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import Car from './Components/Carouselcomp'
import './App.css';
import Sidebar from './Components/Sidebar';
import HighLights from './Components/Highlights.js';

class App extends Component{
render(){
  return (
  <Container fluid={true}>
    <Sidebar />
    <div class="main-content">
        <Car />
        <About />
        <HighLights />
    </div>  
  </Container>
  );
}
}
export default App;
