import React, { Component } from 'react'

export default class SuitNav extends Component {
  render () {
    return (
      <div className='suitnav'>
        { this.props.children }
      </div>
    )
  }
}
