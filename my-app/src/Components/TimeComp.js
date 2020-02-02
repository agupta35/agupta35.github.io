import React, { Component } from "react";
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

class TimeComp extends Component{

render() {
    return (
    <Timeline lineColor={'#ddd'}>
    <TimelineItem
      key="001"
      dateText="May 2017 – Present"
      style={{ color: '#e86971' }}
      bodyContainerStyle={{
        background: '#ddd',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
      }}
    >
      <h3>IT Consultant</h3>
      <h4>Enterprise Infrastructure Services at UB</h4>
      <ul>
      <li>Work on a team to design a python API to set DNS permissions for University-wide users.</li>
      <li> Manage DNS services using Infoblox, roles using Active Directory, manage container infrastructure - Openshift, Docker and assign RSA tokens using RSA security console.</li>
      </ul>
    </TimelineItem>
    <TimelineItem
      key="002"
      dateText="June 2019 – August 2019"
      dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
      bodyContainerStyle={{
        background: '#ddd',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
      }}
    >
      <h3 style={{ color: '#61b8ff' }}>Software Development Intern</h3>
      <h4 style={{ color: '#61b8ff' }}>IHS Markit</h4>
      <ul>
      <li>Understood and worked on the workflow of ownership feature of our Investor relations solution software – BD Corporate that aggregates all publicly available ownership and surveillance data, both at institution and fund level.</li>
      <li>Programmed a new workflow within the back end’s microservice using C# and .NetCore to utilize a much faster and efficient data layer microservice.</li>
      <li>Used Entity Framework and SQL to extract ownership data from the databases.</li>
      <li> Worked on the front end of BD Corporate project to develop front-end interface using Angular and NgRx.</li>
      <li> Understood the overall business model of the company by scheduling meetings with experts from Sales, Marketing, ML, Database, UI-UX, Corporate Analytics, Fixed Income, IPO services.</li>
      </ul>
    </TimelineItem>
    <TimelineItem
      key="003"
      dateText="08/2016 – Present"
      dateInnerStyle={{ background: '#76bb7f' }}
      bodyContainerStyle={{
        background: '#ddd',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
      }}
    >
      <h3>University at Buffalo</h3>
      <h5>B.S Computer Science | Minor Mathematics</h5>
      <h6>
      Expected graduation - May 2020
      </h6>
      <p>
      Relevant Coursework - Data Structures, Computer Algorithms, Programming Languages, and Computer Vision-Deep Learning. | Minor in Mathematics
      </p>
    </TimelineItem>
  </Timeline>
    )
}
}
export default TimeComp;