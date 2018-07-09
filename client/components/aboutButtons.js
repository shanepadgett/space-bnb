import React, { Component } from 'react'
import Link from 'next/link'
import { Container, Row, Col, Button } from 'reactstrap'

export default class aboutButtons extends Component {
  render () {
    return (
      <div className='home-btn-wrapper'>
        <Container >
          <Row>
            <Col xs='6'>
              <Link href='/'>
                <Button color='btn btn-outline-secondary'>Home</Button>
              </Link>
            </Col>
            <Col xs='6'>
              <Link href='#'>
                <Button color='btn btn-outline-secondary'>Next</Button>
              </Link>
            </Col>
          </Row>
        </Container>
        <style global jsx>{`           
              .home-btn-wrapper {
                text-align: center;
                position: absolute; 
                bottom: 100px;
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
