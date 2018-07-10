import {
  Card,
  Button,
  CardTitle,
  Col,
  CardImg,
  CardBody,
  CardSubtitle,
  Row
} from 'reactstrap'

const ResortCard = ({ resort }) => (
  <Col sm='4' className='mb-5'>
    <Card className='border-0 bg-transparent'>
      <CardImg
        top
        width='100%'
        height='200px'
        src={resort.images[Math.floor(Math.random() * resort.images.length)]}
        alt='Card image cap'
        className='resort-img'
      />
      <CardBody className='bg-transparent'>
        <Row>
          <Col xs='6'>
            <Button outline block color='secondary' className='p-1'>
              View
            </Button>
          </Col>
          <Col xs='6'>
            <Button outline block color='danger' className='p-1'>Select</Button>
          </Col>
        </Row>
        <CardTitle className='mt-3 ellipsis'>{resort.name}</CardTitle>
        <CardSubtitle className='text-secondary font-weight-light'>
          {resort.amenities.join(', ')}
        </CardSubtitle>
        <h4 className='text-success mt-1'>{`$ ${resort.price}`}</h4>
      </CardBody>
    </Card>

    <style global jsx>{`
      .resort-img {
        border-radius: 3px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.5);  
      }
      .ellipsis {
        white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `}</style>
  </Col>
)

export default ResortCard
