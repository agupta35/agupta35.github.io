import React, { Component } from 'react';
import profilePicture from '../images/myPicture.jpg';
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
            <a href="#home">Home</a>
            <a href="#about" data-nav-section="about">About</a>
            <a href="#time-l" data-nav-section="time-l">Timeline</a>
        </div>
        <div class="fa">
            <a href="https://www.facebook.com/akshitgpt792" target="_blank">
                <img src={facebook} class="icon" alt="Facebook"></img>
            </a>
            <a href="https://instagram.com/akshitt.gupta" target="_blank">
                <img src={instagram} class="icon" alt="Instagram"></img>
            </a>
            <a href="https://twitter.com/akshit792" target="_blank">
                <img src={twitter} class="icon" alt="Twitter"></img>
            </a>
            <a href="https://www.linkedin.com/in/akshit-gupta-867a1a117/" target="_blank">
                <img src={linkedin} class="icon" alt="LinkedIn"></img>
            </a>
            <a href="https://github.com/agupta35" target="_blank">
                <img src={github} class="icon" alt="github"></img>
            </a>    
        </div>
    </div>
      );
    }
}