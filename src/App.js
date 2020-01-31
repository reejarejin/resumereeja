import React, { Component } from 'react';

import './App.css';
import { PageHeader } from 'antd';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import Home from './components/Home';
import Education from './components/Education';
import Experience from './components/Experience';
import Tab from 'react-bootstrap/Tabs'
import Tabs from 'react-bootstrap/Tabs'
class App extends Component {
  render() {
    return (

      <div class="card text-center"

           style={{ width:'80rem',color:'blue'}}>



        <div class="card-body App">

          <h5 class="card-title">PROFESSIONAL PORTFOLIO: REEJA CHACKO THARAKAN</h5>
          <p class="card-text">THANKS FOR CHECKING OUT MY PORTFOLIO WEBSITE!</p>
        </div>


        <Tabs justify variant="tabs" defaultActiveKey="home">
          <Tab eventKey="home" title="Home">
          <Home/>
          </Tab>
          <Tab eventKey="education" title="Education">
          <Education />
          </Tab>
          <Tab eventKey="work" title="Work Experience & Reference">
          <Experience/>
          </Tab>


        </Tabs>

      </div>
    );
  }
}

export default App;
