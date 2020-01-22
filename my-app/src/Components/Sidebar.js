import React, { Component } from 'react';
import profilePicture from '../images/myPicture.jpg';
import {Nav} from 'react-bootstrap';
import instagram from '../icons/instagram.svg';
import facebook from '../icons/facebook.svg';
import linkedin from '../icons/linkedin.svg';
import twitter from '../icons/twitter.svg';
import github from '../icons/github.svg';
import emailicon from '../icons/email.svg';


export default class Sidebar extends Component{
    render(){
      return (
<div class="side-bar">
        <div class="my-image">  
          <img src={profilePicture} height="150" width="130" alt="profile picture"/>
        </div> 
        <div class="my-name">
        Akshit Gupta
        </div>
        <div class="email">
            <a href="mailto:agupta35@buffalo.edu">
                <img src={emailicon} alt="Email"></img>
            </a>
        agupta35@buffalo.edu
        </div> 
        <div class="nav-column">
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link eventKey="link-1">About</Nav.Link>
            <Nav.Link eventKey="link-2">Projects</Nav.Link>
            <Nav.Link eventKey="link-3">Resume</Nav.Link>
          </Nav>
        </div>
        <div class="fa">
            <a href="https://www.facebook.com/akshitgpt792">
                <img src={facebook} class="icon" alt="Facebook"></img>
            </a>
            <a href="https://instagram.com/akshitt.gupta" >
                <img src={instagram} class="icon" alt="Instagram"></img>
            </a>
            <a href="https://twitter.com/akshit792" >
                <img src={twitter} class="icon" alt="Twitter"></img>
            </a>
            <a href="https://www.linkedin.com/in/akshit-gupta-867a1a117/" >
                <img src={linkedin} class="icon" alt="LinkedIn"></img>
            </a>
            <a href="https://github.com/agupta35" >
                <img src={github} class="icon" alt="github"></img>
            </a>    
        </div>
    </div>
      );
    }
}