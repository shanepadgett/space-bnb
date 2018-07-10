import React, { Component } from 'react'
import { Card, CardText, CardBody,
  CardTitle, Button, Row, Col, Table } from 'reactstrap'

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
          <div className='rounded-circle text-center'>
            <img src='../../static/images/falcon-heavy-render.png' className='rocket-render p-2' alt='Rocket render' />
          </div>
        </CardBody>
        <CardBody>
          <Row>
            <Col lg='6'>
              <h1>Falcon Heavy</h1>
            </Col>
            <Col lg='3' md='6'>
              <i className='fas fa-star mr-1' />
              <i className='fas fa-star mr-1' />
              <i className='fas fa-star mr-1' />
              <i className='fas fa-star-half-alt mr-1' />
              <i className='far fa-star' />
            </Col>
            <Col lg='3' md='6' className='text-right'>
              <h4 className='text-success'>{`$ 10,850`}</h4>
            </Col>
          </Row>
          <Row>
            <Col lg='6' className='mb-3'>
              <CardTitle>Summary</CardTitle>
              <hr className='my-2' />
              <CardText className='text-justify'>Falcon Heavy is the most powerful operational rocket in the world by a factor of two. With the ability to lift into orbit nearly 64 metric tons (141,000 lb)---a mass greater than a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost. Falcon Heavy draws upon the proven heritage and reliability of Falcon 9Falcon Heavy is the most powerful operational rocket in the world by a factor of two. With the ability to lift into orbit nearly 64 metric tons (141,000 lb)---a mass greater than a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost. Falcon Heavy draws upon the proven heritage and reliability of Falcon 9.</CardText>
            </Col>
            <Col lg='6'>
              <CardTitle>TECHNICAL OVERVIEW</CardTitle>
              <hr className='my-2' />
              <Table>
                <tbody>
                  <tr>
                    <th>Height</th>
                    <td className='text-right'>70m229.6 ft</td>
                  </tr>
                  <tr>
                    <th>Total Width:</th>
                    <td className='text-right'>12.2m39.9 ft</td>
                  </tr>
                  <tr>
                    <th>Mass:</th>
                    <td className='text-right'>1,420,788kg</td>
                  </tr>
                  <tr>
                    <th>Payload to LEO:</th>
                    <td className='text-right'>63,800kg</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </CardBody>
        <style global jsx>{`
          th,
          td {
            padding: 0 !important;
          }
          h1 {
            color: #fff !important;
          }
          .fa-star,
          .fa-star-half-alt {
            color: #FC5C65;
          }
          .rounded-circle {
            border: 1px solid #FC5C65;
            background: rgba(252, 92, 101, 0.5);
            height: 100px;
            width: 100px;
          }
          .rocket-render {
            height: 100px;
            transform: rotate(45deg);
          }
        `}</style>
      </Card>
    )
  }
}
