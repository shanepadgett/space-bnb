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
import Link from 'next/link'

const addCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const ResortCard = ({ global, resort }) => (
  <Col md='4' sm='6' className='mb-5'>
    <Card className='border-0 bg-transparent animated zoomIn'>
      <CardImg
        top
        width='100%'
        height='200px'
        src={resort.images[Math.floor(Math.random() * resort.images.length)]}
        alt='Card image cap'
        className='resort-img'
      />
      <CardBody className='bg-transparent pl-0 pr-0'>
        <Row>
          <Col xs='6' className=''>
            <Link prefetch href={{ pathname: '/resortDetail', query: {...global, resortId: resort._id} }}>
              <Button outline block color='secondary' className='p-1'>
                View
              </Button>
            </Link>
          </Col>
          <Col xs='6' className=''>
            <Link prefetch href={{
              pathname: '/transport',
              query: {
                name: global.name,
                start: global.start,
                end: global.end,
                resort: resort.name.replace(/ /g, '-')
              }
            }} >
              <Button outline block color='danger' className='p-1'>
                <i className='fas fa-angle-right' />
                Select
                <i className='fas fa-angle-left' />
              </Button>
            </Link>
          </Col>
        </Row>
        <CardTitle className='mt-3 ellipsis'>{resort.name}</CardTitle>
        <CardSubtitle className='text-secondary font-weight-light'>
          {resort.amenities.join(', ')}
        </CardSubtitle>
        <h4 className='text-success mt-1'>{`$ ${addCommas(resort.price)}`}</h4>
      </CardBody>
    </Card>

    <style global jsx>{`
      .resort-img {
        border-radius: 3px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.5);
        object-fit: cover;
      }
      .ellipsis {
        white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fa-angle-right {
        -webkit-animation-duration: 2s;
        animation-duration: 2s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-name: bounceRight;
        animation-name: bounceRight;
      }
      @-webkit-keyframes bounceRight {
        0%, 100% {
          -webkit-transform: translateX(-5px);
          color: #FC5C65;
        }
        50% {
          -webkit-transform: translateX(-10px);
          color: #000;
        }
      }
      @keyframes bounceRight {
        0%, 100% {
          transform: translateX(-5px);
          color: #FC5C65;
        }
        50% {
          transform: translateX(-10px);
          color: #000;
        }
      }
    
    .fa-angle-left {
        -webkit-animation-duration: 2s;
        animation-duration: 2s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-name: bounceLeft;
        animation-name: bounceLeft;
      }
      @-webkit-keyframes bounceLeft {
        0%, 100% {
          -webkit-transform: translateX(5px);
          color: #FC5C65;
        }
        50% {
          -webkit-transform: translateX(10px);
          color: #000;
        }
      }
      @keyframes bounceLeft {
        0%, 100% {
          transform: translateX(5px);
          color: #FC5C65;
        }
        50% {
          transform: translateX(10px);
          color: #000;
        }
      }
    `}</style>
  </Col>
)

export default ResortCard
