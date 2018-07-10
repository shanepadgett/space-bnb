import React, { Component } from 'react'
import Link from 'next/link'
import ProgressBar from '../components/ProgressBar'
import SuitNav from '../components/Suit/SuitNav'

export default class Resort extends Component {
  static async getInitialProps ({ query }) {
    return { query }
  }

  render () {
    return (
      <div className='reservation-bg'>
        <Link href='/'>
          <img src='../static/images/rocket-icon.svg' className='m-3 logo-img' />
        </Link>
        <SuitNav />
        <ProgressBar progressValue='80' />
        <style global jsx>{`
          .logo-img {
            position: absolute;
            height: 52px;
          }
        `}</style>
      </div>
    )
  }
}
