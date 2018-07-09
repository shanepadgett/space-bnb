import React, { Component } from 'react'
import { Jumbotron, Container } from 'reactstrap'
import AboutDates from './aboutDates'

export default class aboutJumbo extends Component {
  render () {
    return (
      <div>
        <Jumbotron>
          <Container>
            <h1 className='display-3'>About Planet</h1>
            <p className='lead'>Select your dates of travel:</p>
            <AboutDates />
          </Container>
        </Jumbotron>
        <style global jsx>{` 
              .jumbotron {
                background: transparent !important;
              }
              .display-3 {
                color: #fff;
              }

        `}</style>
      </div>
    )
  }
}
