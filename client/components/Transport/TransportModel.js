import React, { Component } from 'react'
import { Card } from 'reactstrap'

export default class TransportModel extends Component {
  constructor (props) {
    super(props)

    this.state = {
      props: props
    }
  }

  render () {
    return (
      <Card className='text-center p-3'>
        <iframe height='500' src='https://sketchfab.com/models/923f88f17f6049af960837fe422ecb70/embed?autostart=1' frameborder='0' allow='autoplay; fullscreen; vr' mozallowfullscreen='true' webkitallowfullscreen='true' />
      </Card>
    )
  }
}

//   <div class="sketchfab-embed-wrapper"><iframe width="640" height="480" src="https://sketchfab.com/models/923f88f17f6049af960837fe422ecb70/embed?autostart=1" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

// <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
//     <a href="https://sketchfab.com/models/923f88f17f6049af960837fe422ecb70?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-weight: bold; color: #1CAAD9;">SpaceX Falcon Heavy</a>
//     by <a href="https://sketchfab.com/jonlundy3d?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-weight: bold; color: #1CAAD9;">JonLundy3D</a>
//     on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a>
// </p>
// </div>
