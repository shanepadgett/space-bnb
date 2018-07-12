import React, { Component } from 'react'
import TransportNav from '../components/Transport/TransportNav'
import ProgressBar from '../components/ProgressBar'
import Model from '../components/Global/Model'
import TransportDetail from '../components/Transport/TransportDetail'
import { Container, Row, Col, Jumbotron } from 'reactstrap'
import Logo from '../components/Global/Logo'
import SpaceScreen from '../components/Global/SpaceScreen'
import rocketConfig from '../components/Transport/rocketConfig'

export default class transport extends Component {
  constructor (props) {
    super(props)

    this.changeRocket = this.changeRocket.bind(this)
    this.state = {
      rocket: 'falconHeavy'
    }
  }
  static async getInitialProps ({ query }) {
    return { query }
  }

  changeRocket (key) {
    this.setState({
      rocket: key
    })
    console.log(this.state)
  }

  render () {
    return (
      <div className='transport'>
        <SpaceScreen />
        <Logo />
        <TransportNav rocket={this.state.rocket} />
        <ProgressBar progressValue='60' />
        <Jumbotron className='pt-4'>
          <Container>
            <h1 className='display-4'>{this.props.query.name}</h1>
            <p className='lead'>Available transport:</p>
            <Row>
              <Col md='5' lg='4' className='mb-3'>
                <Model model={rocketConfig[this.state.rocket].model} />
              </Col>
              <Col md='7' lg='8'>
                <TransportDetail rocket={rocketConfig[this.state.rocket]} rocketConfig={rocketConfig} changeRocket={this.changeRocket} />
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <style global jsx>{`          
          .card {
            background: transparent !important;
          }
          .jumbotron {
            background: transparent !important;
          }
          .display-4,
          .planet-nickname {
            color: #fff;
          }
          hr {
            display: block;
            height: 1px;
            border: 0;
            border-top: 1px solid #fff !important;
            margin: 1em 0;
            padding: 0; 
          }
        `}</style>
      </div>
    )
  }
}
