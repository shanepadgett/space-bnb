import React, { Component } from 'react'
import TransportNavButtons from '../components/Transport/TransportNavButtons'
import ProgressBar from '../components/ProgressBar'
import TransportModel from '../components/Transport/TransportModel'
import TransportDetail from '../components/Transport/TransportDetail'
import { Container, Row, Col, Jumbotron } from 'reactstrap'

export default class transport extends Component {
  static async getInitialProps ({ query }) {
    return { query }
  }

  render () {
    return (
      <div className='transport reservation-bg'>
        <TransportNavButtons />
        <ProgressBar progressValue='60' />
        <Jumbotron className='pt-4'>
          <Container>
            <h1 className='display-4'>{this.props.query.name}</h1>
            <p className='lead'>Available transport:</p>
            <Row>
              <Col sm='6'>
                <TransportModel />
              </Col>
              <Col sm='6'>
                <TransportDetail />
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <style global jsx>{`           
          .card {
            border: 1px solid #fff !important;
          }
        `}</style>
      </div>
    )
  }
}
