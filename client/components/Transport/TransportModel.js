import React, { Component } from 'react'
import { Card } from 'reactstrap'

export default class TransportModel extends Component {
  render () {
    return (
      <Card className='text-center black iframe-card'>
        <iframe
          height='500'
          src={`https://sketchfab.com/models/${this.props.model}/embed?&camera=0&ui_stop=0&ui_annotations=0&ui_controls=0&ui_infos=0&ui_inspector=0`}
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
