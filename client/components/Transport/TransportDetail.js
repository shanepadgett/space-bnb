import React, { Component } from 'react'
import { Card, CardText, CardBody,
  CardTitle, Row, Col, Table } from 'reactstrap'

const addCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export default class TransportDetail extends Component {
  clickHandle (key, e) {
    this.props.changeRocket(key)
    const els = document.getElementsByClassName('rounded-circle')
    Array.prototype.forEach.call(els, el => {
      el.classList.remove('active-rocket')
    })
    document.getElementById(key).classList.add('active-rocket')
  }

  render () {
    return (
      <Card>
        <CardBody className='pb-3 pt-0'>
          <Row>
            {Object.keys(this.props.rocketConfig).map(key => {
              return (
                <Col xs='3' className='text-center mb-5 p-0' key={key}>
                  <div className='rounded-circle text-center' id={key} onClick={this.clickHandle.bind(this, key)}>
                    <img src={this.props.rocketConfig[key].img} className='rocket-render p-2' alt='Rocket render' />
                  </div>
                </Col>
              )
            })}
          </Row>
          <Row>
            <Col lg='6'>
              <h2>{this.props.rocket.name}</h2>
            </Col>
            <Col lg='3' md='6'>
              {this.props.rocket.rating.map(value => {
                return (
                  <i className={`${value} fa-star mr-1`} />
                )
              })}
            </Col>
            <Col lg='3' md='6' className='text-right'>
              <h4 className='text-success'>{`$ ${addCommas(this.props.rocket.price)}`}</h4>
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
                        <th>{key.replace(/_/g, ' ')}</th>
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
          .card {
            border: none;
          }
          th,
          td {
            padding: 0 !important;
          }
          h2 {
            color: #fff !important;
          }
          .fa-star,
          .fa-star-half-alt {
            color: #FC5C65;
          }
          .selected-rocket {
            background: rgba(242, 130, 188, 0.5) !important;
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
          .active-rocket {
            background: -webkit-linear-gradient(left, #33156d 0%, #f282bc 100%);
          }
          .rocket-render {
            height: 100px;
            transform: rotate(45deg);
          }
          @media (max-width: 991px) {
            .rounded-circle {
              height: 80px;
              width: 80px;
            }
            .rocket-render {
              height: 80px;
            }
          }
          @media (max-width: 520px) {
            .rounded-circle {
              height: 60px;
              width: 60px;
            }
            .rocket-render {
              height: 60px;
            }
          }
        `}</style>
      </Card>
    )
  }
}
