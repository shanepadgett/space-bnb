import React, { Component } from 'react'
import axios from 'axios'
import { Container, Row, Jumbotron, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import Logo from '../components/Global/Logo'
import ReservationCard from '../components/ReservationCard'

export default class Reservations extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoggedIn: false
    }
  }

  static async getInitialProps ({ query }) {
    const reservationsRes = await axios.get(`/api/reservations`)
    let reservations = []
    if (reservationsRes.data) {
      reservations = reservationsRes.data
    }
    return { query, reservations }
  }

  login () {
    this.setState({
      isLoggedIn: true
    })
  }

  stuffToRender () {
    if (this.state.isLoggedIn) {
      return this.props.reservations.map(reservation => (
        <ReservationCard reservation={reservation} />
      ))
    } else {
      return (
        <div>
          <h3 className='text-secondary'>Log in to view reservations</h3>
          <Form>
            <FormGroup>
              <Label for='email'>Email</Label>
              <Input
                type='email'
                id='email'
                name='email'
              />
            </FormGroup>
            <FormGroup>
              <Label for='password'>Password</Label>
              <Input
                type='password'
                id='password'
                name='password'
              />
            </FormGroup>
          </Form>
          <Button block outline color='secondary' onClick={this.login.bind(this)}>Login</Button>
        </div>
      )
    }
  }

  render () {
    return (
      <div className='bg-reservation'>
        <Logo />
        <Jumbotron className='pt-4 mb-0'>
          <Container>
            <Row>
              <Col xs>
                <h1 className='text-center text-secondary mb-5'>
                  Your Reservations
                </h1>
              </Col>
            </Row>
            {this.stuffToRender()}
          </Container>
        </Jumbotron>
        <style global jsx>{`
          .bg-reservation {
            background-color: rgba(9, 9, 9, 0.8);
            min-height: 100vh;
            min-width: 100%;
          } 
          .btn-outline-danger {
              border: 1px solid #FC5C65 !important;
              color: #FC5C65 !important;
            }
            
            .btn-outline-danger:hover {
              color: #000 !important;
              background: #FC5C65 !important;
              border: 1px solid #FC5C65 !important;
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
