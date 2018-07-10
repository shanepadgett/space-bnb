import React, { Component } from 'react'

export default class ResortNav extends Component {
  render () {
    return (
      <div className='resortnav'>
        { this.props.children }
      </div>
    )
  }
}
