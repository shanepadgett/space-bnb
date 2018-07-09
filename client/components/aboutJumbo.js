import React, { Component } from 'react'
import { Jumbotron, Container } from 'reactstrap'

export default class aboutJumbo extends Component {
  render () {
    return (
      <div>
        <Jumbotron>
          <Container>
            <h1 className='display-3'>About Planet</h1>
            <p className='lead'>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </Container>
        </Jumbotron>
        <style global jsx>{` 
              .jumbotron {
                background: transparent;
              }
              .display-3 {
                color: #fff;
              }

        `}</style>
      </div>
    )
  }
}
