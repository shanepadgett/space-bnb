import React, { Component } from 'react'
import { Card, CardText, CardBody,
  CardTitle, Button, Row, Col, Table } from 'reactstrap'

export default class TransportDetail extends Component {
  render () {
    return (
      <Card className='p-3'>
        <CardBody className='pb-3'>
          {/* <Row className='mb-3'>
            <Col xs='6'>
              <Button color='btn btn-outline-secondary'><i className='fas fa-arrow-left' /></Button>
            </Col>
            <Col xs='6' className='text-right'>
              <Button color='btn btn-outline-secondary'><i className='fas fa-arrow-right' /></Button>
            </Col>
          </Row> */}
          <Row>
            {Object.keys(this.props.rocketConfig).map(key => {
              return (
                <Col lg='3' xs='6' className='text-center mb-3'>
                  <div className='rounded-circle text-center' key={key} onClick={this.props.changeRocket.bind(this, key)}>
                    <img src={this.props.rocketConfig[key].img} className='rocket-render p-2' alt='Rocket render' />
                  </div>
                </Col>
              )
            })}
          </Row>
          <Row>
            <Col lg='6'>
              <h1>{this.props.rocket.name}</h1>
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
              <CardText className='text-justify'>{this.props.rocket.description}</CardText>
            </Col>
            <Col lg='6'>
              <CardTitle>TECHNICAL OVERVIEW</CardTitle>
              <hr className='my-2' />
              <Table>
                <tbody>
                  {Object.keys(this.props.rocket.quickFacts).map(key => {
                    return (
                      <tr key={key}>
                        <th>{key}</th>
                        <td className='text-right'>{this.props.rocket.quickFacts[key]}</td>
                      </tr>
                    )
                  })}
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
          .selected-rocket {
            background: rgba(242, 130, 188, 0.5);
          }
          .rounded-circle {
            border: 1px solid #f282bc;
            height: 100px;
            width: 100px;
            display: inline-block;
          }
          .rounded-circle:hover {
            background: -webkit-linear-gradient(left, #33156d 0%, #f282bc 100%);
          }
          .rocket-render {
            height: 100px;
            transform: rotate(45deg);
          }
          .unavailable-rocket {
            background: rgba(50, 50, 50, 1);
            opacity: 0.5;
          }
          .unavailable-rocket:hover {
            background: rgba(50, 50, 50, 1);
            opacity: 0.5;
          }
        `}</style>
      </Card>
    )
  }
}
