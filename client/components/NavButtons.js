import React, { Component } from 'react'
import Link from 'next/link'
import { Container, Row, Col, Button } from 'reactstrap'

export default class NavButtons extends Component {
  render () {
    return (
      <div className='home-btn-wrapper'>
        <Container fluid>
          <Row>
            <Col xs='12'>
              <Link href='/'>
                <Button color='btn btn-outline-secondary m-3'>Home</Button>
              </Link>
              <Link href='#'>
                <Button color='btn btn-outline-secondary'>Next</Button>
              </Link>
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
