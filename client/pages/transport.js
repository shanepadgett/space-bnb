import React, { Component } from 'react'
import SpaceScreen from '../components/SpaceScreen'
import TransportNavButtons from '../components/Transport/TransportNavButtons'
import TransportModel from '../components/Transport/TransportModel'
import TransportDetail from '../components/Transport/TransportDetail'
import { Container, Row, Col } from 'reactstrap'

export default class transport extends Component {
  render () {
    return (
      <div className='transport'>
        <SpaceScreen />
        <TransportNavButtons />
        <Container>
          <Row>
            <Col sm='6'>
              <TransportModel />
            </Col>
            <Col sm='6'>
              <TransportDetail />
            </Col>
          </Row>
        </Container>
        <style global jsx>{`           
          .card {
            background: transparent !important;
            border: 1px solid #fff !important;
          }
        `}</style>
      </div>
    )
  }
}
