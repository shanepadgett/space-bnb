import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import DatePicker from 'react-datepicker'

export default class DateSelector extends Component {
  render () {
    return (
      <Container className='text-center'>
        <Row>
          <Col xs='6'>
            <h4>Depart</h4>
            <DatePicker className='text-center pb-3 pt-3'
              selected={this.props.startDate}
              onChange={this.props.setStartDate}
            />
          </Col>
          <Col xs='6'>
            <h4>Return</h4>
            <DatePicker className='text-center pb-3 pt-3'
              selected={this.props.endDate}
              onChange={this.props.setEndDate}
            />
          </Col>
        </Row>
        <style global jsx>{`
              h4 {
                color: #919aa1 !important;
              }
              .react-datepicker-wrapper input {
                background: transparent;
                color: #fff;
                border: 1px solid #919aa1;
                width: 125px;
              }
    
              .btn-outline-secondary:hover {
                color: #000 !important;
              }
        `}</style>
      </Container>
    )
  }
}
