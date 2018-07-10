import React, { Component } from 'react'
import Link from 'next/link'
import {
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap'
import EventBus from 'eventing-bus'
import events from '../lib/constants/eventConstants'

export default class PlanetMenu extends Component {
  createMenu (planet) {
    if (!this.props.showMenu || !planet || planet.toLowerCase() === 'earth') {
      return
    }
    return (
      <Card className='slide'>
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
          <Link href={{ pathname: '/about', query: { name: this.props.selection } }} >
            <Button className='btn btn-outline-danger' onClick={this.onChoosePlanetHandler.bind(this, this.props.selection)}>
              <i className='fas fa-angle-right' />
              Visit {this.props.selection}
              <i className='fas fa-angle-left' />
            </Button>
          </Link>
        </CardBody>
      </Card>
    )
  }

  onChoosePlanetHandler (planetName) {
    EventBus.publish(events.choosePlanet, planetName)
  }

  render () {
    return (
      <Container className='menu-wrapper'>
        <Row>
          <Col md={{ size: 6, offset: 6 }}>
            {this.createMenu(this.props.selection)}
          </Col>
        </Row>
        <style global jsx>{`
          .menu-wrapper {
            position: absolute; 
            width: 100%;
            top: 100px;
            right: 0;
          }
          
          .card {
            background-color: rgba(0, 0, 0, 0.5) !important;
            right: 0px;
            -webkit-animation: slide 0.5s forwards;
            -webkit-animation-delay: 2s;
            animation: slide 0.5s forwards;
            animation-delay: 1s;
          }

          .card-subtitle {
            color: #fff;
          }
        
          @-webkit-keyframes slide {
            100% { right: 10px; }
          }
        
          @keyframes slide {
            100% { right: 10px; }
          }
      `}</style>
      </Container>
    )
  }
}
