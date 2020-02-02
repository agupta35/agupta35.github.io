import React, { Component } from "react";
import TimeComp from './TimeComp.js';

class Highlights extends Component{

render() {
    return ( 
    <section class="time-l" id="time-l">
        <div id="timeline-title">TimeLine</div>
        <div><TimeComp /></div>    
    </section>
    )
}
}
export default Highlights;