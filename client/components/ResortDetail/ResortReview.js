import { Row, Col } from 'reactstrap'

const convertRatingToStars = rating => {
  const starArr = []
  for (let i = 0; i < 5; i++) {
    if (rating >= i) {
      starArr.push('fas')
    } else {
      starArr.push('far')
    }
  }
  return starArr
}

const ResortReview = ({ review }) => (
  <div className='review-bg'>
    <Row className='ml-0 mr-0 mb-3 w-100'>
      <Col xs='1'>
        <img src={review.user.image} className='rounded-circle user-img' />
      </Col>
      <Col xs='11'>
        <Row className='pt-2'>
          <Col xs='12'>
            <div>
              {`${review.user.username} - `}
              {convertRatingToStars(review.rating).map(value => (
                <i className={`${value} fa-star mr-1`} />
              ))}
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs='12'>
            <p>{review.summary}</p>
          </Col>
        </Row>
      </Col>
    </Row>

    <style jsx>{`
      .user-img {
        width: 70px;
        height: 70px;
        margin: 10px 0;
      }
      .review-bg {
        background: rgba(0, 0, 0, 0.4);
      }
      .fa-star,
      .fa-star-half-alt {
        color: #FC5C65;
      }
    `}</style>
  </div>
)

export default ResortReview
