import { Component } from 'react'
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import Link from 'next/link'
import axios from 'axios'

class UserInfoCard extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showGoHome: false
    }
  }

  onGuestButtonClick (e) {
    e.preventDefault()
    const user = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      email: document.getElementById('email').value
    }

    axios
      .post('api/user', user)
      .then(res => {
        document.getElementById('firstName').value = ''
        document.getElementById('lastName').value = ''
        document.getElementById('email').value = ''

        this.props.reservationData.user = res.data._id

        // console.log(JSON.stringify(this.props.reservationData, null, 2))

        return axios.post('/api/reservation', this.props.reservationData)
      })
      .then(reservationResp => {
        this.setState({
          showGoHome: true
        })
      })
      .catch(err => console.log(err))
  }

  renderForm () {
    if (!this.state.showGoHome) {
      return (
        <Form>
          <FormGroup>
            <Label for='firstName'>First Name</Label>
            <Input
              type='text'
              id='firstName'
              name='firstName'
              placeholder='John'
            />
          </FormGroup>
          <FormGroup>
            <Label for='lastName'>Last Name</Label>
            <Input
              type='text'
              id='lastName'
              name='lastName'
              placeholder='Smith'
            />
          </FormGroup>
          <FormGroup>
            <Label for='email'>Email</Label>
            <Input
              type='email'
              id='email'
              name='email'
              placeholder='example@place.com'
            />
          </FormGroup>
          <FormGroup>
            <Label for='email'>Create Password</Label>
            <Input type='password' id='password' name='password' />
          </FormGroup>
          <div className='d-flex justify-content-between'>
            <Button
              outline
              color='secondary'
              onClick={this.onGuestButtonClick.bind(this)}
            >
              Create Account
            </Button>
            <Button outline color='danger'>Log In</Button>
          </div>
        </Form>
      )
    } else {
      return (
        <div>
          <h2 className='text-success w-100 text-center mb-2'>Reservation Confirmed!</h2>
          <Link prefetch href='/'>
            <Button block>Go Home</Button>
          </Link>
        </div>
      )
    }
  }

  render () {
    return (
      <Row>
        <Col sm='12'>
          {this.renderForm()}
        </Col>
      </Row>
    )
  }
}

export default UserInfoCard
