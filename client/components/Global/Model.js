import React, { Component } from 'react'
import { Card } from 'reactstrap'

export default class Model extends Component {
  render () {
    return (
      <Card className='text-center black iframe-card'>
        <iframe
          height='500'
          src={`https://sketchfab.com/models/${this.props.model}/embed?autospin=0.5&camera=0&`}
          allowFullScreen
          mozAllowFullScreen
          frameBorder='0'
        />

        <style global jsx>{`
          .card {
            background: transparent !important;
          }
          .black {
            background: black !important;
          }
          .reservation-bg {
            background: rgba(9, 9, 9, 1) !important;
          }
        `}</style>
      </Card>
    )
  }
}
