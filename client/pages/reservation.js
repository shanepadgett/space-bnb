import React, { Component } from 'react'
import Logo from '../components/Global/Logo'
import ProgressBar from '../components/ProgressBar'
import ReservationNav from '../components/Reservation/ReservationNav'
import SpaceScreen from '../components/Global/SpaceScreen'

export default class Reservation extends Component {
  static async getInitialProps ({ query }) {
    return { query }
  }

  render () {
    return (
      <div>
        <SpaceScreen />
        <Logo />
        <ReservationNav />
        <ProgressBar progressValue='100' />
        <style global jsx>{`
        `}</style>
      </div>
    )
  }
}
