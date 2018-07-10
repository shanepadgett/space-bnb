import React, { Component } from 'react'
import { Card, CardText, CardBody,
  CardTitle, Button, Row, Col } from 'reactstrap'

export default class TransportDetail extends Component {
  render () {
    return (
      <Card className='p-3'>
        <CardBody className='pb-3'>
          <Row >
            <Col xs='6'>
              <Button color='btn btn-outline-secondary'><i className='fas fa-arrow-left' /></Button>
            </Col>
            <Col xs='6' className='text-right'>
              <Button color='btn btn-outline-secondary'><i className='fas fa-arrow-right' /></Button>
            </Col>
          </Row>
        </CardBody>
        <CardBody>
          <h1>Falcon Heavy</h1>
          <Card className='scroll-card'>
            <CardTitle className='mb-0'>Summary</CardTitle>
            <hr className='my-2' />
            <CardText className='text-justify'>Falcon Heavy is the most powerful operational rocket in the world by a factor of two. With the ability to lift into orbit nearly 64 metric tons (141,000 lb)---a mass greater than a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost. Falcon Heavy draws upon the proven heritage and reliability of Falcon 9Falcon Heavy is the most powerful operational rocket in the world by a factor of two. With the ability to lift into orbit nearly 64 metric tons (141,000 lb)---a mass greater than a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost. Falcon Heavy draws upon the proven heritage and reliability of Falcon 9.</CardText>
            <CardTitle className='mb-0'>TECHNICAL OVERVIEW</CardTitle>
            <hr className='my-2' />
            <CardText>
              Height: 70m229.6 ft <br />
              Total Width: 12.2m39.9 ft <br />
              Mass: 1,420,788kg <br />
              Payload to LEO: 63,800kg
            </CardText>
          </Card>
        </CardBody>
        <CardBody>
          <Row >
            <Col xs='6'>
              <i className='fas fa-star mr-1' />
              <i className='fas fa-star mr-1' />
              <i className='fas fa-star mr-1' />
              <i className='fas fa-star-half-alt mr-1' />
              <i className='far fa-star' />
            </Col>
            <Col xs='6' className='text-right'>
              <h4 className='text-success'>{`$ 10,850`}</h4>
            </Col>
          </Row>
        </CardBody>
        <style global jsx>{`
          h1 {
            color: #fff !important;
          }
          .card {
            height: 500px;
           
          }
          .scroll-card {
            height: 20vw;
            overflow: scroll;
            border: none !important;
          }
          .fa-star,
          .fa-star-half-alt {
            color: #FC5C65;
          }
        `}</style>
      </Card>
    )
  }
}
