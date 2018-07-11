import React, { Component } from 'react';

export default class suitConfig extends Component {
  render() {
    return (
      <div className="suitconfig">
        { this.props.children }
      </div>
    )
  }
}
