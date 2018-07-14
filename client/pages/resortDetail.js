import { Component } from 'react'
import { Container, Row, Button } from 'reactstrap'
import Link from 'next/link'
import ResortDetailImages from '../components/ResortDetail/ResortDetailImages'
import ResortDetails from '../components/ResortDetail/ResortDetails'
import axios from 'axios'
import resortImages from '../lib/configs/resortImages'

class ResortDetail extends Component {
  static async getInitialProps ({ query }) {
    const resortRes = await axios.get(`/api/resort/${query.resortId}`)
    const resort = resortRes.data
    resort.images = resortImages[query.name]
    return { resort, query }
  }

  render () {
    return (
      <div className=''>
        <div className='reservation-bg fixed-to-bg'>
          <img src={this.props.resort.images[0]} className='fixed-to-bg' />
        </div>
        <Container>
          <Row className='m-0 w-100 d-flex justify-content-between mt-4'>
            <h1 className='text-light align-content-center m-0 my-auto'>
              {this.props.resort.name}
            </h1>
            <Link prefetch href={{ pathname: '/resort', query: this.props.query }}>
              <Button>Go Back</Button>
            </Link>
          </Row>
          <ResortDetailImages images={this.props.resort.images} />
          <ResortDetails
            summary={this.props.resort.summary}
            amenities={this.props.resort.amenities}
            reviews={this.props.resort.reviews}
          />
        </Container>
        <style jsx>{`
          img {
            opacity: 0.2;
            filter: blur(10px);
            transform: scale(1.1);
          }          
        `}</style>
        <style global jsx>{`
          .reservation-bg {
            background: rgba(0, 0, 0, 1);
          }          
        `}</style>
      </div>
    )
  }
}

export default ResortDetail
