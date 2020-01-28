import React, { Component } from "react";
import {Card,CardDeck,Row} from 'react-bootstrap'

class About extends Component{

render() {
    return ( 
        <div class="animated fadeInLeft  delay-1s">
    <section class="About" id="about">
        <div id="a-title" >About</div>
        <div id="question">Who am I?</div>
        
        <div id="answer">
        I am a Senior at the University at Buffalo, New York majoring in Computer Science and minoring in Mathematics. I have a passion for technology and the positive impact it creates in business transformation and process improvement. I am intent on a career in developing state of the art secure software solutions which can innovate the world we live in. 
        </div>
        <div id="expertise">Some of my expertise</div>
        <CardDeck> 
        <Card bg='dark' text="white">
            <Card.Body>
                <Card.Title><span class="card-icon"><i class="far fa-lightbulb"></i></span>WEB DEVELOPMENT</Card.Title>
                    <Card.Text>
                        I have experience in building full stack web applications using C#, .NET, Angular, and Entity framework.
                    </Card.Text>
            </Card.Body>
        </Card>
        <Card bg='dark' text="white">
            <Card.Body>
                <Card.Title><span class="card-icon"><i class="fab fa-react"></i></span>Deep Learning</Card.Title>
                    <Card.Text>
                        I have experience in building deep learning architectures for tasks like image clasification, NLP, and forecasting. I also have a good grasp over Deep Learning Architectures such as Google's Bert, GAN, AlexNet, LSTMs, and Transformers.
                    </Card.Text>
            </Card.Body>
        </Card>
        <Card bg='dark' text="white">
            <Card.Body>
                <Card.Title><span class="card-icon"><i class="fas fa-database"></i></span>Data Structures and Algorithms</Card.Title>
                    <Card.Text>
                         Knowledge
                    </Card.Text>
            </Card.Body>
        </Card>
        </CardDeck>
    </section>
    </div>

    )
}
}
export default About;