import React from 'react';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Lets from './components/Lets.js'
import Build from './components/Build.js'
import Something from './components/Something.js'
import Together from './components/Together.js'
import { pushRotate as Menu } from 'react-burger-menu'
import './App.css'


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      displayBuild: false,
      displaySomething: false,
      displayTogether: false
    };
  }

  addBuild = () => {
    this.setState((prevState, props) => ({
      prevState,
      displayBuild: true
    }))
  }

  addSomething = () => {
    this.setState((prevState, props) => ({
      prevState,
      displaySomething: true
    }))
  }

  addTogether = () => {
    this.setState((prevState, props) => ({
      prevState,
      displayTogether: true
    }))
  }


  componentDidMount() {
    let buildTimer = setTimeout(() => this.addBuild(), 750)
    let somethingTimer = setTimeout(() => this.addSomething(), 1500)
    let togetherTimer = setTimeout(() => this.addTogether(), 2250)
    //let addPictureTimer = setTimeout(() => this.addTogether(), 2250)
    //let addMenuTimer = setTimeout(() => this.addTogether(), 2250)
  }

  componentWillUnmount() {
     clearTimeout(this.buildTimer);
     clearTimeout(this.somethingTimer);
     clearTimeout(this.togetherTimer);
  }

  render () {
  return (
    <div  >
    <Container id="outer-container" style={{ paddingTop: '1rem', position: 'fixed', height: '100vh' }}>
      <Row>
        <Col xs={4}><Lets/></Col>
      </Row>
      <Row  >
        <Col xs={6}>
          { this.state.displayBuild === true ? <Build/> : ""}
        </Col>
      </Row>
      <Row >
        <Col xs={9}>
          { this.state.displaySomething === true ? <Something /> : ""}
        </Col>
      </Row>
      <Row>
        <Col id="page-wrap" xs={10}>
        { this.state.displayTogether === true ? <Together /> : ""}
        </Col>
      </Row>
    </Container>
    <Menu right pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
     <a id="home" className="menu-item" href="/">Home</a>
     <a id="about" className="menu-item" href="/about">About</a>
     <a id="contact" className="menu-item" href="/contact">Contact</a>
     <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
   </Menu>
    </div>
  );}
}

export default App;

// <Col><BackgroundAnimations /></Col>
// <Col md="auto"><BackgroundAnimations /></Col>
//<Col xs={10}><BackgroundAnimations /></Col>
// <Row>
//   <BackgroundAnimations />
//   <BackgroundAnimations />
// </Row>
