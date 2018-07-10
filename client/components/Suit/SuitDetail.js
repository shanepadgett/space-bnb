import React, { Component } from 'react'

export default class SuitDetail extends Component {
  render () {
    return (
      <div className='suitdetail'>
        { this.props.children }
      </div>
    )
  }
}
