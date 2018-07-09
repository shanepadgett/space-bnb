import React, { Component } from 'react'

export default class SpaceScreen extends Component {
  render () {
    return (
      <div>
        <div className='space-screen' />
        <style global jsx>{` 
              .space-screen {
                position: absolute;
                z-index: -9998;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.6);
              }
        `}</style>
      </div>
    )
  }
}
