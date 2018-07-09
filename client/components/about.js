import React, { Component } from 'react'
import SpaceScreen from './SpaceScreen'
import AboutJumbo from './aboutJumbo'
import AboutButtons from './aboutButtons'

export default class about extends Component {
  render () {
    return (
      <div>
        <SpaceScreen />
        <AboutJumbo />
        <AboutButtons />
      </div>
    )
  }
}
