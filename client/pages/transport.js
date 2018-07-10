import React, { Component } from 'react'
import TransportNavButtons from '../components/Transport/TransportNavButtons'
import TransportModel from '../components/Transport/TransportModel'
import TransportDetail from '../components/Transport/TransportDetail'
import { Container, Row, Col } from 'reactstrap'

export default class transport extends Component {
  render () {
    return (
      <div className='transport reservation-bg'>
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
            border: 1px solid #fff !important;
          }
        `}</style>
      </div>
    )
  }
}
