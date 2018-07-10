import React, { Component } from 'react'

export default class SpaceScreen extends Component {
  render () {
    return (
      <div>
        <div className='space-screen' />
        <style global jsx>{` 
            .space-screen {
              width: 100vw;
              height: 100%;
              display: block;
              position: absolute;
              top: 0;
              left: 0;
              z-index: -9995;
              background-color: rgba(9, 9, 9, 0.8);
              }
        `}</style>
      </div>
    )
  }
}
