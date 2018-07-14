import React, { Component } from 'react'
import { Card, CardText, CardBody,
  CardTitle, Row, Col, Table } from 'reactstrap'

const addCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export default class SuitDetail extends Component {
  clickHandle (key, e) {
    this.props.changeSuit(key)
    const els = document.getElementsByClassName('rounded-circle')
    Array.prototype.forEach.call(els, el => {
      el.classList.remove('active-suit')
    })
    document.getElementById(key).classList.add('active-suit')
  }

  render () {
    return (
      <Card>
        <CardBody className='pb-3 pt-0'>
          <Row>
            {Object.keys(this.props.suitConfig).map(key => {
              return (
                <Col xs='3' className='text-center mb-5 p-0' key={key}>
                  <div className='rounded-circle text-center' id={key} onClick={this.clickHandle.bind(this, key)}>
                    <img src={this.props.suitConfig[key].img} className='suit-render p-2' alt='Suit render' />
                  </div>
                </Col>
              )
            })}
          </Row>
          <Row>
            <Col lg='6'>
              <h2>{this.props.suit.name}</h2>
            </Col>
            <Col lg='3' md='6'>
              {this.props.suit.rating.map(value => {
                return (
                  <i className={`${value} fa-star mr-1`} />
                )
              })}
            </Col>
            <Col lg='3' md='6' className='text-right'>
              <h4 className='text-success'>{`$ ${addCommas(this.props.suit.price)}`}</h4>
            </Col>
          </Row>
          <Row>
            <Col lg='6' className='mb-3'>
              <CardTitle>Summary</CardTitle>
              <hr className='my-2' />
              <CardText className='text-justify'>{this.props.suit.description}</CardText>
            </Col>
            <Col lg='6'>
              <CardTitle>TECHNICAL OVERVIEW</CardTitle>
              <hr className='my-2' />
              <Table>
                <tbody>
                  {Object.keys(this.props.suit.quickFacts).map(key => {
                    return (
                      <tr key={key}>
                        <th>{key.replace(/_/g, ' ')}</th>
                        <td className='text-right'>{this.props.suit.quickFacts[key]}</td>
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
          .selected-suit {
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
          .active-suit {
            background: -webkit-linear-gradient(left, #33156d 0%, #f282bc 100%);
          }
          .suit-render {
            height: 100px;
          }
          @media (max-width: 991px) {
            .rounded-circle {
              height: 80px;
              width: 80px;
            }
            .suit-render {
              height: 80px;
            }
          }
          @media (max-width: 520px) {
            .rounded-circle {
              height: 60px;
              width: 60px;
            }
            .suit-render {
              height: 60px;
            }
          }
        `}</style>
      </Card>
    )
  }
}
