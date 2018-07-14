import { Row, Col } from 'reactstrap'

const ResortDetailImages = ({ images }) => (
  <div>
    <Row className='mb-4 mt-4'>
      {images.map(image => (
        <Col sm='3'>
          <img src={image} className='shadow' />
        </Col>
      ))}
    </Row>

    <style jsx>{`
      img {
        width: 100%;
        height: 100%;
      }
    `}</style>
  </div>
)

export default ResortDetailImages
