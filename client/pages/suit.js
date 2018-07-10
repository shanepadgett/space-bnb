import React, { Component } from 'react'
import Logo from '../components/Global/Logo'
import ProgressBar from '../components/ProgressBar'
import { Container, Row, Col, Jumbotron } from 'reactstrap'
import SuitNav from '../components/Suit/SuitNav'
import SpaceScreen from '../components/Global/SpaceScreen'
import SuitModel from '../components/Suit/SuitModel'
import SuitDetail from '../components/Suit/SuitDetail'

export default class Resort extends Component {
  static async getInitialProps ({ query }) {
    return { query }
  }

  render () {
    return (
      <div>
        <SpaceScreen />
        <Logo />
        <SuitNav />
        <ProgressBar progressValue='80' />
        <Jumbotron className='pt-4'>
          <Container>
            <h1 className='display-4'>{this.props.query.name}</h1>
            <p className='lead'>Available transport:</p>
            <Row>
              <Col sm='6'>
                <SuitModel />
              </Col>
              <Col sm='6'>
                <SuitDetail />
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <style global jsx>{`
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
