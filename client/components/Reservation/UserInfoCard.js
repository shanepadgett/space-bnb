import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'

const UserInfoCard = () => (
  <Row>
    <Col sm='12'>
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
        <div className='d-flex justify-content-between'>
          <Button outline color='secondary'>Continue as Guest</Button>
          <Button outline color='danger'>Log In</Button>
        </div>
      </Form>
    </Col>
  </Row>
)

export default UserInfoCard
