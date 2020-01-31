import React, { Component } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Pic from '../Pics/pic1.jpg'
import './index.css';
import Row from 'react-bootstrap/Row'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
library.add(faLinkedin)

class Home extends Component {
render() {
  return(
    <div>
      <br/>
      <Container>
        <h3>Front End Developer/Junior Web Developer </h3>

        <br/>
          <Row>
            <Col xs={8} md={4}>
              <Image className="Image" src={Pic} rounded />
            </Col>
          </Row>


        </Container>


        <ul class="list">
          <li>Fast learner and excellent team player. </li>
          <li>Excellent communication, interpersonal, organizational, Leadership skills. </li>
          <li>Proficient at implementation, maintenance, troubleshooting, and management of Customer Services.</li>
          <li>Technologies: CSS, HTML, JavaScript, Ruby on Rails, PostgreSQL, Vue.Js, React.Js ,Visual Basic, MS Access,SQL,Java,ReactBootstrap,Ant UI Design.</li>
          <li>Tools: Seagate Crystal Report, GitHub, GitLab, Slack.</li>
          <li>Attended Workshop for Agile in Project Management(Cre8tivedevsSoftware) </li>
          <li>Attended AWS learning series at University of Denver.</li>
          <li className="job">Working as a Front End Web Developer with Crea8tive Devs Software (2018 onwards ) </li>
        </ul>

        <footer>
          <hr/>
          <Container>
            <a href="https://www.linkedin.com/in/reeja-tharakan-792a15127/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>

          </Container>
        </footer>

    </div>
  );
}

}
export default Home;
