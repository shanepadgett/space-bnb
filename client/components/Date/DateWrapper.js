import React, { Component } from 'react'
import { Jumbotron, Container } from 'reactstrap'
import DateSelector from './DateSelector'
import Planets from '../../lib/threeJS/sceneSubjects/planetConfig'

export default class DateWrapper extends Component {
  render () {
    return (
      <div>
        <Jumbotron className='pt-4'>
          <Container>
            <h1 className='display-4'>{this.props.selection}</h1>
            <p className='lead'>Select your dates of travel:</p>
            <DateSelector setEndDate={this.props.setEndDate} setStartDate={this.props.setStartDate} startDate={this.props.startDate} endDate={this.props.endDate} />
            <Container className='info-text text-justify mt-5'>
              <h3 className='planet-nickname'>{Planets[this.props.selection].nickname}</h3>
              <hr className='my-2 mt-3 mb-3' />
              <p>
                {Planets[this.props.selection].description}
              </p>
            </Container>
          </Container>
        </Jumbotron>
        <style global jsx>{` 
              .jumbotron {
                background: transparent !important;
              }
              .display-4,
              .planet-nickname {
                color: #fff;
              }
              .info-text {
                line-height: 20px;
              }
              hr {
                display: block;
                height: 1px;
                border: 0;
                border-top: 1px solid #fff !important;
                margin: 1em 0;
                padding: 0; 
            }

        `}</style>
      </div>
    )
  }
}
