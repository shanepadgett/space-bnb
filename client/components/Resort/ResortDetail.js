import React, { Component } from 'react'

export default class ResortDetail extends Component {
  render () {
    return (
      <div className='resortdetail'>
        { this.props.children }
      </div>
    )
  }
}
