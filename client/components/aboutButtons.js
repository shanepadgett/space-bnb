import React, { Component } from 'react'
import Link from 'next/link'
import { Button } from 'reactstrap'

export default class aboutButtons extends Component {
  render () {
    return (
      <div>
        <div className='conatiner home-btn-wrapper'>
          <div className='row'>
            <div className='col-6'>
              <Link href='/'><Button color='btn btn-outline-secondary'>Home</Button></Link>
            </div>
            <div className='col-6'>
              <Link href='#'><Button color='btn btn-outline-secondary'>Next</Button></Link>
            </div>
          </div>
        </div>
        <style global jsx>{`           
              .home-btn-wrapper {
                text-align: center;
                position: absolute; 
                bottom: 100px;
                width: 100%;
              }
    
              .btn-outline-secondary:hover {
                color: #000 !important;
              }
        `}</style>
      </div>
    )
  }
}
