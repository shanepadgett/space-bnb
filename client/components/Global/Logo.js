import React, { Component } from 'react'
import Link from 'next/link'

export default class Logo extends Component {
  render () {
    return (
      <div>
        <Link href='/'>
          <img src='../static/images/rocket-icon.svg' className='m-3 logo-img' />
        </Link>
        <style global jsx>{`
          .logo-img {
            position: absolute;
            height: 52px;
            z-index: 2;
            cursor: pointer;
          }
          `}</style>
      </div>
    )
  }
}
