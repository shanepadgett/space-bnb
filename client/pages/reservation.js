import React, { Component } from 'react'
import ReservationNav from '../components/Reservation/ReservationNav'
import ProgressBar from '../components/ProgressBar'
import { Container, Row, Col, Jumbotron, Table } from 'reactstrap'
import Logo from '../components/Global/Logo'
import SpaceScreen from '../components/Global/SpaceScreen'
import suitConfig from '../components/Suit/suitConfig'
import planetConfig from '../lib/threeJS/sceneSubjects/planetConfig'
import rocketConfig from '../components/Transport/rocketConfig'

export default class Reservation extends Component {
  static async getInitialProps ({ query }) {
    let obj = {
      destination: planetConfig[query.name].name.charAt(0).toUpperCase().concat(planetConfig[query.name].name.slice(1)),
      departure: query.start,
      return: query.end,
      accommodations: query.resort,
      transport: rocketConfig[query.transport].name,
      suit: suitConfig[query.suit].name
    }
    let prices = [
      parseInt(rocketConfig[query.transport].price),
      parseInt(suitConfig[query.suit].price)
    ]

    let total = prices.reduce((x, y) => x + y)

    return { obj, total }
  }

  addCommas (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  render () {
    return (
      <div className='transport'>
        <SpaceScreen />
        <Logo />
        <ReservationNav />
        <ProgressBar progressValue='100' />
        <Jumbotron className='pt-4'>
          <Container>
            <h1 className='display-4'>{this.props.obj.destination}</h1>
            <p className='lead'>Your reservation is complete!</p>
            <Row>
              <Col className='mb-3'>
                <Table>
                  <tbody>
                    {Object.keys(this.props.obj).map(key => {
                      return (
                        <tr key={key}>
                          <th>{key}</th>
                          <td className='text-right'>{this.props.obj[key]}</td>
                        </tr>
                      )
                    })}
                    <tr>
                      <th>total cost</th>
                      <td className='text-right text-success'>{`$ ${this.addCommas(this.props.total)}`}</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <style global jsx>{`          
          .card {
            background: transparent !important;
          }
          .jumbotron {
            background: transparent !important;
          }
          .display-4,
          .planet-nickname {
            color: #fff;
          }
          hr {
            display: block;
            height: 1px;
            border: 0;
            border-top: 1px solid #fff !important;
            margin: 1em 0;
            padding: 0; 
          }
        `}</style>
      </div>
    )
  }
}
