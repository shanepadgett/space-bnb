import React, { Component } from 'react'

export default class Resort extends Component {
  constructor (props) {
    super(props)
    console.log(props, props.children, props.state, this.props)
  }
  render () {
    return (
      <div className='resort'>
        { this.props.children }
      </div>
    )
  }
}
