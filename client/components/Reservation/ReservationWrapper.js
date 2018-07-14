import React, { Component } from 'react';

export default class ReservationWrapper extends Component {
  render() {
    return (
      <div className="reservationwrapper">
        { this.props.children }
      </div>
    )
  }
}
