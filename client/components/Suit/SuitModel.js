import React, { Component } from 'react'
import { Card } from 'reactstrap'

export default class ResortModel extends Component {
  constructor (props) {
    super(props)

    this.state = {
      props: props
    }
  }

  render () {
    return (
      <Card className='text-center'>
        <iframe
          height='500'
          src='https://sketchfab.com/models/9ca3dc74a66847da981a5353f3e71a68/embed?autostart=1&autospin=0.5&camera=0&ui_stop=0&ui_annotations=0&ui_controls=0&transparent=1&ui_infos=0&ui_inspector=0'
          frameBorder='0'
          allow='autoplay; fullscreen; vr'
          mozallowfullscreen='true'
          webkitallowfullscreen='true'
        />

        <style global jsx>{`
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
