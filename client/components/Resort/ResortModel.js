import React, { Component } from 'react'

export default class ResortModel extends Component {
  render () {
    return (
      <div className='resortmodel'>
        { this.props.children }
      </div>
    )
  }
}
