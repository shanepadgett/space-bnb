import React, { Component } from 'react'
import { Card } from 'reactstrap'

export default class TransportModel extends Component {
  render () {
    return (
      <Card className='text-center black iframe-card'>
        <iframe
          height='500'
          src={`https://sketchfab.com/models/${this.props.model}/embed?autostart=1&autospin=0.5&camera=0&ui_stop=0&ui_annotations=0&ui_controls=0&transparent=1&ui_infos=0&ui_inspector=0`}
          frameBorder='0'
          allow='autoplay; fullscreen; vr'
          mozallowfullscreen='true'
          webkitallowfullscreen='true'
        />

        <style global jsx>{`
          .iframe-card {
            border: 1px solid #fff !important;
          }
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
