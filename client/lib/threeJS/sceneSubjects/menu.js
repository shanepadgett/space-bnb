import React, { Component } from 'react'
import Link from 'next/link'
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap'

export default class Menu extends Component {
  render () {
    return (
      <div className='container card-wrapper'>
        <div className='row'>
          <div className='offset-md-6 col-md-6'>
            <Card>
              <CardBody>
                <CardTitle>{this.props.selection}</CardTitle>
                <CardSubtitle>Information</CardSubtitle>
                <CardText>
                  {' '}<br />
                  Distance from Sun: 67.24 million mi <br />
                  Radius: 3,760 mi <br />
                  Orbital period: 225 days <br />
                  Mass: 4.867 × 10^24 kg (0.815 M⊕) <br />
                  Equatorial rotation velocity: 6.52 km/h (1.81 m/s) <br />
                  Average orbital speed‎: ‎35.02 km/s <br />
                  Surface gravity‎: ‎8.87 m/s2; 0.904 g <br />
                  Surface area‎: ‎4.6023×108 km2 <br />
                </CardText>
                <Link href='/about'>
                  <Button className='btn btn-outline-danger'>
                    <i className='fas fa-angle-right' />
                    Visit {this.props.selection}
                    <i className='fas fa-angle-left' />
                  </Button>
                </Link>
              </CardBody>
            </Card>
          </div>
        </div>
        <style global jsx>{`
          .card-wrapper {
            position: absolute; 
            width: 100%;
            right: 0;
            top: 100px;
          }

          .card-wrapper-hide {
            position: absolute; 
            width: 100%;
            right: 0;
            top: 100px;
          }
          
          .card {
            background-color: rgba(0, 0, 0, 0.5) !important;
          }

          .card-subtitle {
            color: #fff;
          }
      `}</style>
      </div>
    )
  }
}
