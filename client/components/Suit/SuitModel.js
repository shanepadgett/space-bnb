import React, { Component } from 'react'

export default class SuitModel extends Component {
  render () {
    return (
      <div className='suitmodal'>
        { this.props.children }
      </div>
    )
  }
}
