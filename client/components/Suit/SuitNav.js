import React, { Component } from 'react'
import Link from 'next/link'
import { Container, Row, Col, Button } from 'reactstrap'

export default class SuitNav extends Component {
  render () {
    return (
      <div className='home-btn-wrapper'>
        <Container fluid>
          <Row>
            <Col xs='12'>
              <Link prefetch href={{ pathname: '/transport',
                query: {
                  name: this.props.global.name,
                  start: this.props.global.start,
                  end: this.props.global.end,
                  resort: this.props.global.resort
                }
              }}>
                <Button color='btn btn-outline-secondary m-3'><i className='fas fa-arrow-left' /></Button>
              </Link>
              <Link prefetch href={{
                pathname: '/reservation',
                query: {
                  name: this.props.global.name,
                  start: this.props.global.start,
                  end: this.props.global.end,
                  resort: this.props.global.resort,
                  transport: this.props.global.transport,
                  suit: this.props.suit
                }
              }}>
                <Button color='btn btn-outline-danger'>
                  <i className='fas fa-angle-right' />
                    Select
                  <i className='fas fa-angle-left' />
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
        <style global jsx>{`
              .btn-outline-danger {
                border: 1px solid #FC5C65 !important;
                color: #FC5C65 !important;
              }
              
              .btn-outline-danger:hover {
                color: #000 !important;
                background: #FC5C65 !important;
                border: 1px solid #FC5C65 !important;
              }            
              .home-btn-wrapper {
                text-align: right;
                width: 100%
              }
              .btn-outline-secondary:hover {
                color: #000 !important;
              }
              .fa-angle-right {
                -webkit-animation-duration: 2s;
                animation-duration: 2s;
                -webkit-animation-fill-mode: both;
                animation-fill-mode: both;
                -webkit-animation-timing-function: linear;
                animation-timing-function: linear;
                animation-iteration-count: infinite;
                -webkit-animation-iteration-count: infinite;
                -webkit-animation-name: bounceRight;
                animation-name: bounceRight;
              }
              @-webkit-keyframes bounceRight {
                0%, 100% {
                  -webkit-transform: translateX(-5px);
                  color: #FC5C65;
                }
                50% {
                  -webkit-transform: translateX(-10px);
                  color: #000;
                }
              }
              @keyframes bounceRight {
                0%, 100% {
                  transform: translateX(-5px);
                  color: #FC5C65;
                }
                50% {
                  transform: translateX(-10px);
                  color: #000;
                }
              }
              .fa-angle-left {
                  -webkit-animation-duration: 2s;
                  animation-duration: 2s;
                  -webkit-animation-fill-mode: both;
                  animation-fill-mode: both;
                  -webkit-animation-timing-function: linear;
                  animation-timing-function: linear;
                  animation-iteration-count: infinite;
                  -webkit-animation-iteration-count: infinite;
                  -webkit-animation-name: bounceLeft;
                  animation-name: bounceLeft;
                }
                @-webkit-keyframes bounceLeft {
                  0%, 100% {
                    -webkit-transform: translateX(5px);
                    color: #FC5C65;
                  }
                  50% {
                    -webkit-transform: translateX(10px);
                    color: #000;
                  }
                }
                @keyframes bounceLeft {
                  0%, 100% {
                    transform: translateX(5px);
                    color: #FC5C65;
                  }
                  50% {
                    transform: translateX(10px);
                    color: #000;
                  }
                }
        `}</style>
      </div>
    )
  }
}
