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
          <CardTitle>Summary</CardTitle>
          <CardText className='text-justify'>Falcon Heavy is the most powerful operational rocket in the world by a factor of two. With the ability to lift into orbit nearly 64 metric tons (141,000 lb)---a mass greater than a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost. Falcon Heavy draws upon the proven heritage and reliability of Falcon 9.</CardText>
        </CardBody>
        <style global jsx>{`
          h1 {
            color: #fff;
          }
        `}</style>
      </Card>
    )
  }
}
