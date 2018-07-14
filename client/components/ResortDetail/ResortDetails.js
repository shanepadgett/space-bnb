import { Row, Col } from 'reactstrap'
import ResortReview from './ResortReview'

const ResortDetails = ({ summary, amenities, reviews }) => (
  <div>
    <Row>
      <Col sm='6'>
        <h3 className='text-secondary'>Summary</h3>
        <hr className='bg-secondary' />
        <p className='text-light'>{summary}</p>
      </Col>
      <Col sm='6'>
        <h3 className='text-secondary'>Amenities</h3>
        <hr className='bg-secondary' />
        <ul>
          {amenities.map(item => <li className='text-light'>{item}</li>)}
        </ul>
      </Col>
    </Row>

    <Row>
      <Col xs='12'>
        <h3 className='text-secondary'>Reviews</h3>
        <hr className='bg-secondary' />
      </Col>
      <Col xs='12'>
        {reviews.map(review => (
          <ResortReview review={review} />
        ))}
      </Col>
    </Row>
  </div>
)

export default ResortDetails
