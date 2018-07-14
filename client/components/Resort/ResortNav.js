import React, { Component } from 'react'
import Link from 'next/link'
import { Container, Row, Col, Button } from 'reactstrap'

export default class ResortNav extends Component {
  render () {
    return (
      <div className='home-btn-wrapper'>
        <Container fluid>
          <Row>
            <Col xs='12'>
              <Link prefetch href='/'>
                <Button color='btn btn-outline-secondary m-3'><i className='fas fa-times' /></Button>
              </Link>
              {/* <Link href={{ pathname: '/date', query: this.props.dates }}>
                <Button color='btn btn-outline-secondary m-3'><i className='fas fa-arrow-left' /></Button>
              </Link> */}
              {/* <Link href={{ pathname: '/transport', query: this.props.dates }}>
                <Button color='btn btn-outline-secondary'><i className='fas fa-arrow-right' /></Button>
              </Link> */}
            </Col>
          </Row>
        </Container>
        <style global jsx>{`           
              .home-btn-wrapper {
                text-align: right;
                width: 100%
              }
    
              .btn-outline-secondary:hover {
                color: #000 !important;
              }
        `}</style>
      </div>
    )
  }
}
