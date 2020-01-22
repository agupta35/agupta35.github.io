import React, { Component } from "react"
import {Carousel, Container,Button} from 'react-bootstrap';
import CarouselImage1 from '../images/slide1.jpg';
import CarouselImage2 from '../images/view-projects.jpg';
import heart from '../icons/heart.svg';



export default class Carouselcomp extends Component{
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          index: 0,
          direction: null
        };
        }
    
    handleSelect = (selectedIndex, e) => {
        this.setState({
            index:selectedIndex,
            direction:e
        });
    }
    
    
          render() {
            const { index, direction } = this.state;
            
            return ( 
            <Container fluid={true}>
                <Carousel activeIndex={index} direction={direction} onSelect={this.handleSelect} pauseOnHover={true}>
                <Carousel.Item>
                  <img className="d-block w-100"
                    src={CarouselImage1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <div class="slide-caption-1">Hi! I'm Akshit</div>
                    <div><a class="button slide1"href="https://drive.google.com/open?id=17jfdbaISr2GEO5GJ1nYaw8Kcdz61FKFi">View CV</a></div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100"
                    src={CarouselImage2}
                    alt="Second slide"
                  />
                  
                  <Carousel.Caption>
                    <div class= "slide-caption">
                    I 
                      <span>
                        <img src={heart} class="fa"></img>
                      </span> 
                     building things.
                      </div>
                    <div><Button variant="outline-light" size="lg" href="https://github.com/agupta35" >View Projects</Button></div>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              </Container>
            );
        }

}




