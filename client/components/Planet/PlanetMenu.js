import React, { Component } from 'react'
import Link from 'next/link'
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Table
} from 'reactstrap'
import Planets from '../../lib/threeJS/sceneSubjects/planetConfig'

export default class PlanetMenu extends Component {
  createMenu (planet) {
    if (!this.props.showMenu || !planet || planet.toLowerCase() === 'earth') {
      return
    }
    return (
      <Card className='slide animated slideInRight'>
        <CardBody>
          <CardTitle>{this.props.selection}</CardTitle>
          <CardSubtitle>Information</CardSubtitle>
          <div className='mt-3'>
            <Table>
              <tbody>
                {Object.keys(Planets[this.props.selection].quickFacts).map(key => {
                  return (
                    <tr key={key}>
                      <th>{key}</th>
                      <td className='text-right'>{Planets[this.props.selection].quickFacts[key]}</td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </div>
          <Link prefetch href={{ pathname: '/about', query: { name: this.props.selection } }} >
            <Button className='btn btn-outline-danger'>
              <i className='fas fa-angle-right' />
              Visit {this.props.selection}
              <i className='fas fa-angle-left' />
            </Button>
          </Link>
        </CardBody>
      </Card>
    )
  }

  render () {
    return (
      <Container className='menu-wrapper'>
        <Row>
          <Col md={{ size: 6, offset: 6 }} sm={{ size: 8, offset: 4 }}>
            {this.createMenu(this.props.selection)}
          </Col>
        </Row>
        <style global jsx>{`
          th,
          td {
            padding: 0 !important;
          }
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
